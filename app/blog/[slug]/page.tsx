import {
    PortableText,
    type PortableTextReactComponents,
    type SanityDocument,
} from 'next-sanity';
import { Image } from 'next-sanity/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const styles: Partial<PortableTextReactComponents> = {
    types: {},
    marks: {},
    block: {
        h1: ({ children }: { children?: ReactNode }) => (
            <h1 className="text-4xl font-bold text-foreground mt-10 mb-4">
                {children}
            </h1>
        ),
        h2: ({ children }: { children?: ReactNode }) => (
            <h2 className="text-3xl font-semibold text-foreground mt-8 mb-3">
                {children}
            </h2>
        ),
        h3: ({ children }: { children?: ReactNode }) => (
            <h3 className="text-2xl font-medium text-foreground mt-6 mb-2">
                {children}
            </h3>
        ),
        normal: ({ children }: { children?: ReactNode }) => (
            <p className="text-base text-foreground/90 leading-relaxed my-4">
                {children}
            </p>
        ),
    },
};

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    mainImage,
    categories,
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
        options,
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
        }).format(new Date(dateString));
    };

    return (
        <>
            <div className="bg-background py-8 px-12 md:px-48 lg:px-84">
                <Navbar />
            </div>
            <main className="relative min-h-screen bg-background text-foreground">
                <article className="mx-auto max-w-7xl px-8 py-12 lg:px-16 lg:py-16">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[var(--accent-poster)] transition-colors mb-8"
                    >
                        ← Back to posts
                    </Link>

                    {post.categories?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.categories.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-poster)] border border-[var(--accent-poster)]/40 rounded-full px-3 py-1"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] mb-6">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-10">
                        {authorImageUrl && post.author && (
                            <Image
                                src={authorImageUrl}
                                alt={post.author.name}
                                className="rounded-full object-cover"
                                width={32}
                                height={32}
                            />
                        )}
                        {post.author && (
                            <span className="text-foreground/90">
                                {post.author.name}
                            </span>
                        )}
                        {post.author && post.publishedAt && (
                            <span aria-hidden>·</span>
                        )}
                        {post.publishedAt && (
                            <time dateTime={post.publishedAt}>
                                {formatDate(post.publishedAt)}
                            </time>
                        )}
                    </div>

                    {postImageUrl && (
                        <div className="aspect-video rounded-2xl overflow-hidden border border-border mb-10">
                            <Image
                                src={postImageUrl}
                                alt={post.mainImage?.alt ?? post.title}
                                className="w-full h-full object-cover"
                                width={1280}
                                height={720}
                            />
                        </div>
                    )}

                    {Array.isArray(post.body) && (
                        <div>
                            <PortableText
                                value={post.body}
                                components={styles}
                            />
                        </div>
                    )}
                </article>
            </main>
        </>
    );
}
