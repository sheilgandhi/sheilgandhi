import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Navbar from '@/components/navbar';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage, previewText}`;

const options = { next: { revalidate: 30 } };

export default async function Blog() {
    const posts = await client.fetch<SanityDocument[]>(
        POSTS_QUERY,
        {},
        options
    );

    return (
        <div className="page">
            <Navbar />
            <h1 className="text-4xl font-bold gap-8">Recent Posts</h1>
            {posts.map((post) => {
                const postImageUrl = post.mainImage
                    ? urlFor(post.mainImage)?.width(200).height(200).url()
                    : null;
                return (
                    <Link key={post._id} href={`/blog/${post.slug.current}`}>
                        <Card className="hover:scale-105 transition-transform">
                            <div className="flex px-4">
                                <Image
                                    src={postImageUrl ?? ''}
                                    alt={post.mainImage.alt}
                                    width={100}
                                    height={100}
                                    className="border-2 rounded-xl"
                                />
                                <div className="flex flex-col w-full">
                                    <CardHeader className="text-xl font-semibold">
                                        {post.title}
                                    </CardHeader>
                                    <CardDescription className="pl-6">
                                        {new Date(
                                            post.publishedAt
                                        ).toLocaleDateString()}
                                    </CardDescription>
                                    <CardDescription className="pl-6 py-2">
                                        {post.previewText
                                            ? post.previewText
                                            : 'No preview text available'}
                                    </CardDescription>
                                </div>
                            </div>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}
