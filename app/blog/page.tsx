import Link from 'next/link';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Navbar from '@/components/navbar';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Badge } from '@/components/ui/badge';
import FeaturedPost from '@/components/blog/FeaturedPost';

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
    const featured_post = posts.find(
        (post) => post._id === '7947b336-a1d0-404e-b06b-37e24195e935'
    );

    return (
        <div className="page">
            <Navbar />
            <h1 className="text-4xl font-bold">Recent Posts</h1>
            <p>I pretend to know what I am talking about.</p>
            <h2>Featured Post</h2>
            <FeaturedPost post={featured_post} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {posts.map((post) => {
                    const postImageUrl = post.mainImage
                        ? urlFor(post.mainImage)?.width(1920).height(1080).url()
                        : null;
                    return (
                        <Card
                            key={post._id}
                            className="hover:scale-105 transition-transform"
                            data-id={post._id}
                        >
                            <Link
                                href={`/blog/${post.slug.current}`}
                                className="grid [grid-template-rows:subgrid] row-span-3 space-between h-full"
                            >
                                <Image
                                    src={postImageUrl ?? ''}
                                    alt={post.mainImage.alt}
                                    objectFit="contain"
                                    width={1920}
                                    height={1080}
                                    className="object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="flex flex-col w-full p-6 gap-2">
                                    <CardHeader className="text-xl font-semibold text-left px-0">
                                        {post.title}
                                    </CardHeader>
                                    <CardDescription>
                                        {post.previewText
                                            ? post.previewText
                                            : 'No preview text available'}
                                    </CardDescription>
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
                                </div>
                            </Link>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}
