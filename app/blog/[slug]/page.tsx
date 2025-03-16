import { PortableText, type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { Image } from 'next-sanity/image';
import Navbar from '@/components/navbar';
import { urlFor } from '@/sanity/lib/image';

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    mainImage,
    "author": author->{
      _id,
      name,
      image,
      bio
    }
  }`;
const options = { next: { revalidate: 30 } };

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const post = await client.fetch<SanityDocument>(
        POST_QUERY,
        await params,
        options
    );
    const postImageUrl = post.mainImage ? urlFor(post.mainImage)?.url() : null;
    const authorImageUrl = post.author
        ? urlFor(post.author.image)?.url()
        : null;
    const formatDate = (dateString: string) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        }).format(new Date(dateString));
    };

    return (
        <div className="page gap-8">
            <Navbar />
            <Link href="/blog" className="hover:underline">
                ← Back to posts
            </Link>
            {postImageUrl && (
                <Image
                    src={postImageUrl}
                    alt={post.mainImage.alt}
                    className="w-full aspect-video rounded-xl"
                    width="550"
                    height="310"
                />
            )}
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <div className="flex items-center gap-4">
                {authorImageUrl && (
                    <Image
                        src={authorImageUrl}
                        alt={post.author.name}
                        className="cover rounded-full"
                        width={40}
                        height={40}
                    />
                )}
                <p>{post.author.name}</p>
                <p>|</p>
                <p>Published: {formatDate(post.publishedAt)}</p>
            </div>
            {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
    );
}
