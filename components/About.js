import Skills from './Skills'
import WebIcon from '@material-ui/icons/Web';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import CodeIcon from '@material-ui/icons/Code';
import AboutCard from './AboutCard';
import Fade from 'react-reveal/Fade';


function About() {
    return (
        <div className="w-screen max-w-full h-screen max-h-full" id="about">
            <Fade bottom>
            <div className="bg-gray-200 h-4/6"> 
                <Skills />
                <div className="flex flex-wrap items-start justify-around  mr-4">
                    <div className="px-5 pb-10 items-start">
                        <h1 className="text-red-500 font-black text-8xl">3<sup>rd</sup></h1>
                        <p className="font-bold text-2xl break-words">Year University Student</p>
                        <p className="font-bold text-2xl break-words">@ Victoria University of Wellington</p>
                    </div>
                    <div className="px-5">
                        <h1 className="font-bold text-4xl">Fullstack Developer, Software and UX Engineer</h1>
                        <Fade right>
                        <div className="flex flex-row overflow-y-scroll scrollbar-hide items-center justify-evenly mt-8 md:mt-16 lg:mt-24">
                            <AboutCard title='Fullstack' subtitle='Discover More' className="mx-4" />
                            <AboutCard title='User Experience' subtitle='Discover More'/>
                            <AboutCard title='Software' subtitle='Discover More'/>
                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default About
