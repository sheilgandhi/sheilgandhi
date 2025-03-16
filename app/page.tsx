import Experience from '@/components/home/experience';
import Hero from '@/components/home/hero';
import Navbar from '@/components/navbar';
import Socials from '@/components/socials';

export default function Home() {
    return (
        <div className="flex flex-col py-8 px-12 md:px-48 lg:px-84 gap-16 font-[family-name:var(--font-geist-sans)]">
            <Navbar />
            <Hero />
            <Socials />
            <Experience />
        </div>
    );
}
