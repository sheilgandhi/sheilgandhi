import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { accent } from './constants';

const PHOTO_QUERY = `*[_type == "profile"][0]{
    photo {
        asset,
        alt
    }
}`;

const FALLBACK_PHOTO =
    'https://pbs.twimg.com/profile_images/1675812499306819585/OR2xz4uq_400x400.jpg';

type ProfilePhotoData = {
    photo?: {
        asset?: { _ref: string };
        alt?: string;
    };
} | null;

export default async function ProfilePhoto() {
    const data = await client.fetch<ProfilePhotoData>(
        PHOTO_QUERY,
        {},
        { next: { revalidate: 30 } },
    );

    const src = data?.photo?.asset
        ? urlFor(data.photo)
              .width(1280)
              .height(2560)
              .fit('crop')
              .auto('format')
              .quality(95)
              .url()
        : FALLBACK_PHOTO;
    const alt = data?.photo?.alt ?? 'Sheil Gandhi';
    const isCustomPhoto = Boolean(data?.photo?.asset);

    return (
        <div className="hidden xl:flex xl:col-span-4 justify-center pt-4">
            <div className="relative">
                {isCustomPhoto ? (
                    <div
                        className="h-[640px] w-[320px] overflow-hidden rounded-2xl"
                        style={{
                            maskImage:
                                'linear-gradient(to bottom, black 65%, transparent 100%)',
                            WebkitMaskImage:
                                'linear-gradient(to bottom, black 65%, transparent 100%)',
                        }}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={640}
                            height={1280}
                            priority
                            loading="eager"
                            unoptimized
                            className="w-full h-full object-cover object-top scale-125 origin-top -translate-y-16"
                        />
                    </div>
                ) : (
                    <Image
                        src={src}
                        alt={alt}
                        width={320}
                        height={400}
                        priority
                        loading="eager"
                        className="rounded-2xl object-cover h-[400px] w-[320px] grayscale contrast-110"
                    />
                )}
                <svg
                    viewBox="0 0 100 120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="absolute -top-12 -right-8 h-24 w-20 rotate-[8deg]"
                    style={{ color: accent }}
                >
                    <path d="M 78 6 Q 30 22, 60 56 Q 82 92, 30 100" />
                    <path d="M 38 88 L 28 100 L 42 110" />
                </svg>
            </div>
        </div>
    );
}
