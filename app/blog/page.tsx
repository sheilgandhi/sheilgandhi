import Link from 'next/link';
import Image from 'next/image';
import { type SanityDocument } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Navbar from '@/components/navbar';
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
        options,
    );
    const featured_post = posts.find(
        (post) => post._id === '7947b336-a1d0-404e-b06b-37e24195e935',
    );

    return (
        <>
            <div className="bg-background py-8 px-12 md:px-48 lg:px-84">
                <Navbar />
            </div>
            <main className="relative min-h-screen bg-background text-foreground">
                <div className="mx-auto max-w-7xl px-8 py-12 lg:px-16 lg:py-16">
                    <section className="mb-12">
                        <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] leading-[0.85] font-black text-foreground/30 dark:text-foreground/10 select-none">
                            RECENT
                            <br />
                            POSTS
                        </h1>
                        <p className="mt-4 text-sm tracking-[0.3em] text-muted-foreground font-semibold">
                            NOTES FROM THE FIELD
                        </p>
                    </section>

                    {featured_post && (
                        <section className="mb-16">
                            <h2 className="text-[var(--accent-poster)] text-sm font-bold tracking-widest mb-4">
                                FEATURED
                            </h2>
                            <FeaturedPost post={featured_post} />
                        </section>
                    )}

                    <section>
                        <h2 className="text-[var(--accent-poster)] text-sm font-bold tracking-widest mb-6">
                            ALL POSTS
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {posts.map((post) => {
                                const postImageUrl = post.mainImage
                                    ? urlFor(post.mainImage)
                                          ?.width(1280)
                                          .height(720)
                                          .url()
                                    : null;
                                return (
                                    <Link
                                        key={post._id}
                                        href={`/blog/${post.slug.current}`}
                                        className="group flex flex-col bg-muted/40 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-[var(--accent-poster)] transition-colors"
                                    >
                                        {postImageUrl && (
                                            <div className="aspect-video overflow-hidden">
                                                <Image
                                                    src={postImageUrl}
                                                    alt={
                                                        post.mainImage?.alt ??
                                                        post.title
                                                    }
                                                    width={1280}
                                                    height={720}
                                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-3 p-6 flex-1">
                                            <h3 className="text-xl font-bold text-foreground leading-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                                {post.previewText ??
                                                    'No preview text available'}
                                            </p>
                                            {post.categories?.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {post.categories.map(
                                                        (tag: string) => (
                                                            <span
                                                                key={tag}
                                                                className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-poster)] border border-[var(--accent-poster)]/40 rounded-full px-3 py-1"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
