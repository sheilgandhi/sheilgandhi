import { Suspense } from 'react';
import AppsGrid from '@/components/home/apps-grid';
import Contact from '@/components/home/contact';
import Drive from '@/components/home/drive';
import Education from '@/components/home/education';
import Journey from '@/components/home/journey';
import NameBlock from '@/components/home/name-block';
import PortfolioLink from '@/components/home/portfolio-link';
import ProfilePhoto from '@/components/home/profile-photo';
import SkillsList from '@/components/home/skills-list';
import Navbar from '@/components/navbar';

const glassyBox =
    'bg-muted/40 backdrop-blur-sm rounded-2xl border border-border p-6';

const skillsFallback = (
    <div className="text-left xl:text-right text-muted-foreground text-sm">
        Loading skills…
    </div>
);

const appsFallback = (
    <div className={glassyBox}>
        <p className="text-muted-foreground text-sm">Loading apps…</p>
    </div>
);

export default function Home() {
    return (
        <>
            <div className="bg-background py-8">
                <div className="mx-auto max-w-7xl px-8 lg:px-16">
                    <Navbar />
                </div>
            </div>
            <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
                <div className="mx-auto max-w-7xl px-8 py-12 lg:px-16 lg:py-16">
                    <section className="relative grid grid-cols-1 xl:grid-cols-12 gap-8 mb-12">
                        <NameBlock />
                        <div className="hidden xl:block xl:col-span-4 xl:pt-12 z-10">
                            <Education />
                        </div>
                    </section>

                    {/* Mobile / Tablet: vertical flow with all cards glassy */}
                    <section className="xl:hidden space-y-8">
                        <Drive />
                        <Journey />
                        <div className={glassyBox}>
                            <Suspense fallback={skillsFallback}>
                                <SkillsList />
                            </Suspense>
                        </div>
                        <div className={glassyBox}>
                            <PortfolioLink />
                        </div>
                        <Suspense fallback={appsFallback}>
                            <AppsGrid />
                        </Suspense>
                        <div className={glassyBox}>
                            <Education />
                        </div>
                    </section>

                    {/* Desktop: original 3-column poster layout */}
                    <section className="hidden xl:grid xl:grid-cols-12 gap-8 items-start">
                        <div className="xl:col-span-4 space-y-8">
                            <Drive />
                            <PortfolioLink />
                            <Suspense fallback={appsFallback}>
                                <AppsGrid />
                            </Suspense>
                        </div>

                        <ProfilePhoto />

                        <div className="xl:col-span-4 space-y-10">
                            <Suspense fallback={skillsFallback}>
                                <SkillsList />
                            </Suspense>
                            <Journey />
                        </div>
                    </section>

                    <Contact />
                </div>
            </main>
        </>
    );
}
