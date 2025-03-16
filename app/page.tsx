import Experience from '@/components/home/experience';
import Hero from '@/components/home/hero';
import Navbar from '@/components/navbar';
import Socials from '@/components/socials';

export default function Home() {
    return (
        <div className="page">
            <Navbar />
            <Hero />
            <Socials />
            <Experience />
        </div>
    );
}
