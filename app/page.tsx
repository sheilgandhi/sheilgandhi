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

export default function Home() {
    return (
        <>
            <div className="bg-background py-8 px-12 md:px-48 lg:px-84">
                <Navbar />
            </div>
            <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
                <div className="mx-auto max-w-7xl px-8 py-12 lg:px-16 lg:py-16">
                    <section className="relative grid grid-cols-1 xl:grid-cols-12 gap-8 mb-12">
                        <NameBlock />
                        <Education />
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-1 xl:col-span-4 space-y-8">
                            <Drive />
                            <PortfolioLink />
                            <Suspense
                                fallback={
                                    <div className="bg-neutral-900/60 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                                        <p className="text-neutral-500 text-sm">
                                            Loading apps…
                                        </p>
                                    </div>
                                }
                            >
                                <AppsGrid />
                            </Suspense>
                        </div>

                        <ProfilePhoto />

                        <div className="md:col-span-1 xl:col-span-4 space-y-10">
                            <Suspense
                                fallback={
                                    <div className="text-right text-neutral-500 text-sm">
                                        Loading skills…
                                    </div>
                                }
                            >
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
