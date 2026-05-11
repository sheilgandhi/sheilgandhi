import Image from 'next/image';
import Link from 'next/link';
import { SanityDocument } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';

export default function FeaturedPost({
    post,
}: {
    post: SanityDocument | undefined;
}) {
    if (!post) {
        return null;
    }

    const image = post.mainImage
        ? urlFor(post.mainImage)?.width(1920).height(1080).url()
        : null;

    return (
        <Link
            href={`/blog/${post.slug.current}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-muted/40 backdrop-blur-sm rounded-2xl border border-border overflow-hidden hover:border-[var(--accent-poster)] transition-colors"
        >
            {image && (
                <div className="aspect-video md:aspect-auto md:h-full overflow-hidden">
                    <Image
                        src={image}
                        alt={post.mainImage?.alt ?? post.title}
                        width={1920}
                        height={1080}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            )}
            <div className="p-8 flex flex-col gap-4 justify-center">
                {post.categories?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
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
                <h3 className="text-3xl font-bold text-foreground leading-tight">
                    {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                    {post.previewText}
                </p>
            </div>
        </Link>
    );
}
