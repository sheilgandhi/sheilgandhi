import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import AppLink from './app-link';

type AppImage = {
    _key: string;
    alt?: string;
    url?: string;
    asset: { _ref: string };
};

const APPS_QUERY = `*[_type == "profile"][0].apps[defined(asset)]{
    _key,
    alt,
    url,
    asset
}`;

const options = { next: { revalidate: 30 } };

export default async function AppsGrid() {
    const apps =
        (await client.fetch<AppImage[] | null>(APPS_QUERY, {}, options)) ?? [];

    return (
        <div className="bg-muted/40 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
                PUBLISHED{' '}
                <span className="text-[var(--accent-poster)]">APPS</span>
            </h2>
            {apps.length === 0 ? (
                <p className="text-muted-foreground text-sm italic">
                    No apps yet — add some in Sanity Studio at /studio
                </p>
            ) : (
                <div className="grid grid-cols-4 gap-x-6 gap-y-5 items-center justify-items-center">
                    {apps.map((app) => {
                        const src = urlFor(app).width(320).fit('max').url();
                        const logo = (
                            <Image
                                src={src}
                                alt={app.alt ?? 'App'}
                                width={160}
                                height={80}
                                className="object-contain h-10 w-auto opacity-70 contrast-125 hover:opacity-100 transition-opacity invert dark:invert-0"
                            />
                        );
                        return (
                            <div
                                key={app._key}
                                className="flex items-center justify-center h-12"
                            >
                                {app.url ? (
                                    <AppLink url={app.url} alt={app.alt}>
                                        {logo}
                                    </AppLink>
                                ) : (
                                    logo
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
