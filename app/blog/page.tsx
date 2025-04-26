import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Navbar from '@/components/navbar';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Badge } from '@/components/ui/badge';

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, mainImage, previewText, categories}`;

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
            <h1 className="text-4xl font-bold">Recent Posts</h1>
            <p>i write about ideas i have</p>
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
                                <div className="flex flex-col w-full pl-6 gap-2">
                                    <CardHeader className="text-xl font-semibold text-left px-0">
                                        {post.title}
                                    </CardHeader>
                                    <CardDescription className="flex gap-4">
                                        {post.categories &&
                                            post.categories.map(
                                                (tag: string) => (
                                                    <Badge
                                                        key={tag}
                                                        variant={'outline'}
                                                    >
                                                        {tag}
                                                    </Badge>
                                                )
                                            )}
                                    </CardDescription>
                                    <CardDescription>
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
