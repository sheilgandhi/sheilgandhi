import Experience from '@/components/home/experience';
import Hero from '@/components/home/hero';
import Skills from '@/components/home/skills';
import Navbar from '@/components/navbar';
import Socials from '@/components/home/socials';

export default function Home() {
    return (
        <div className="page">
            <Navbar />
            <Hero />
            <Socials />
            <Skills />
            <Experience />
        </div>
    );
}
