import { ShieldCheck, Lock, Eye, Mail } from 'lucide-react';
import Navbar from '@/components/navbar';

const LAST_UPDATED = '2026-05-12';

const sections = [
    {
        icon: ShieldCheck,
        title: 'EDGE PROTECTION',
        body: (
            <>
                All public traffic to <code>sheilgandhi.com</code> is fronted by{' '}
                <strong>Cloudflare</strong> — TLS termination, DDoS mitigation,
                and a Web Application Firewall sit between the public internet
                and the origin. Bot traffic is rate-limited at the edge. The
                origin itself is never directly exposed.
            </>
        ),
    },
    {
        icon: Lock,
        title: 'ZERO-TRUST INTERNAL SERVICES',
        body: (
            <>
                Internal services I host privately are reachable only through{' '}
                <strong>Cloudflare Tunnel</strong> (cloudflared) — an
                outbound-only connection from the origin to Cloudflare&apos;s
                edge. No inbound firewall ports are opened on my network, no
                VPN is required, and every request must pass{' '}
                <strong>Cloudflare Access</strong> identity verification before
                it reaches the underlying service. Unauthenticated traffic is
                dropped at the edge.
            </>
        ),
    },
    {
        icon: Eye,
        title: 'ANALYTICS & PRIVACY',
        body: (
            <>
                Analytics are opt-in. On first visit a consent banner appears;
                until you accept, no analytics cookies are written and no
                events are sent. If you accept, I collect anonymous page views,
                clicks, and uncaught errors via <strong>PostHog</strong>{' '}
                routed through a first-party reverse proxy. I do not sell,
                share, or trade visitor data. Session recordings are disabled.
                You can revoke consent any time by clearing site data for this
                domain.
            </>
        ),
    },
    {
        icon: Mail,
        title: 'RESPONSIBLE DISCLOSURE',
        body: (
            <>
                If you find a security issue with anything on this domain,
                please email{' '}
                <a
                    href="mailto:sheilgandhi24@hotmail.com"
                    className="underline hover:text-[var(--accent-poster)]"
                >
                    sheilgandhi24@hotmail.com
                </a>
                . I appreciate responsible disclosure and will respond as soon
                as I&apos;m able.
            </>
        ),
    },
];

export default function SitemapPage() {
    return (
        <>
            <div className="bg-background py-8">
                <div className="mx-auto max-w-7xl px-8 lg:px-16">
                    <Navbar />
                </div>
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
                            HOW THIS PROPERTY IS BUILT, RUN, AND PROTECTED
                        </p>
                    </section>

                    <section className="space-y-4">
                        {sections.map(({ icon: Icon, title, body }) => (
                            <article
                                key={title}
                                className="bg-muted/40 backdrop-blur-sm rounded-2xl border border-border p-6"
                            >
                                <div className="flex items-start gap-4">
                                    <Icon
                                        className="h-5 w-5 flex-shrink-0 mt-1"
                                        style={{
                                            color: 'var(--accent-poster)',
                                        }}
                                        aria-hidden="true"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-[var(--accent-poster)] text-sm font-bold tracking-widest mb-3">
                                            {title}
                                        </h2>
                                        <p className="text-sm text-foreground/90 leading-relaxed">
                                            {body}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>

                    <p className="mt-8 text-xs text-muted-foreground">
                        Last updated{' '}
                        <time dateTime={LAST_UPDATED}>{LAST_UPDATED}</time>
                    </p>
                </div>
            </main>
        </>
    );
}
