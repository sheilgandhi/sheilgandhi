import { urlFor } from '@/sanity/lib/image';
import { SanityDocument } from 'next-sanity';
import Image from 'next/image';
import { Badge } from '../ui/badge';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border rounded-lg shadow-lg overflow-hidden w-full">
            <Image
                src={image ?? ''}
                alt={post.mainImage.alt}
                objectFit="contain"
                width={1920}
                height={1080}
                className="object-cover  group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 flex flex-col gap-4">
                <div className="flex gap-2">
                    {post.categories &&
                        post.categories.map((tag: string) => (
                            <Badge key={tag} variant={'destructive'}>
                                {tag}
                            </Badge>
                        ))}
                </div>
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-sm text-muted-foreground">
                    {post.previewText}
                </p>
            </div>
        </div>
    );
}
