import Link from 'next/link';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/navbar';

const portfolioRoutes = [
    {
        path: '/blog',
        description:
            'Long-form writing — engineering, projects, and the lessons in between.',
    },
];

const protectedRoutes = [
    'router.sheilgandhi.com',
    'emby.sheilgandhi.com',
    'qbit.sheilgandhi.com',
    'nas.sheilgandhi.com',
];

export default function SitemapPage() {
    return (
        <>
            <div className="bg-background py-8 px-12 md:px-48 lg:px-84">
                <Navbar />
            </div>
            <main className="relative min-h-screen bg-background text-foreground">
                <div className="mx-auto max-w-7xl px-8 py-12 lg:px-16 lg:py-16">
                    <section className="mb-12">
                        <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] leading-[0.85] font-black text-foreground/30 dark:text-foreground/10 select-none">
                            SITE
                            <br />
                            MAP
                        </h1>
                        <p className="mt-4 text-sm tracking-[0.3em] text-muted-foreground font-semibold">
                            EVERY DOOR ON THIS PROPERTY
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-[var(--accent-poster)] text-sm font-bold tracking-widest mb-4">
                            PORTFOLIO ROUTES
                        </h2>
                        <div className="space-y-3">
                            {portfolioRoutes.map((r) => (
                                <Link
                                    key={r.path}
                                    href={r.path}
                                    className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-muted/40 backdrop-blur-sm rounded-2xl border border-border p-6 hover:border-[var(--accent-poster)] transition-colors"
                                >
                                    <span className="font-mono text-sm text-foreground group-hover:text-[var(--accent-poster)] transition-colors min-w-[8rem]">
                                        {r.path}
                                    </span>
                                    <p className="text-sm text-muted-foreground flex-1">
                                        {r.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-[var(--accent-poster)] text-sm font-bold tracking-widest mb-4">
                            CLOUDFLARE PROTECTED ROUTES
                        </h2>
                        <div className="bg-muted/40 backdrop-blur-sm rounded-2xl border border-border p-6 mb-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheck
                                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                                    style={{
                                        color: 'var(--accent-poster)',
                                    }}
                                />
                                <p className="text-sm text-foreground/90 leading-relaxed">
                                    These subdomains route through a{' '}
                                    <strong>Cloudflare Tunnel</strong>{' '}
                                    (cloudflared) — an outbound-only connection
                                    that exposes self-hosted services from my
                                    home network without opening any inbound
                                    ports or running a VPN. Access is gated by
                                    Cloudflare Access, so only authenticated
                                    users get through the door.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {protectedRoutes.map((host) => (
                                <a
                                    key={host}
                                    href={`https://${host}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-4 bg-muted/40 backdrop-blur-sm rounded-2xl border border-border p-6 hover:border-[var(--accent-poster)] transition-colors"
                                >
                                    <ShieldCheck
                                        className="h-4 w-4 flex-shrink-0"
                                        style={{
                                            color: 'var(--accent-poster)',
                                        }}
                                        aria-label="Cloudflare Access protected"
                                    />
                                    <span className="font-mono text-sm text-foreground group-hover:text-[var(--accent-poster)] transition-colors flex-1">
                                        {host}
                                    </span>
                                    <ArrowUpRight
                                        className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-[var(--accent-poster)] transition-colors"
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
