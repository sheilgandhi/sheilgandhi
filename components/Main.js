import Header from "./Header"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CreateIcon from '@material-ui/icons/Create'; // Medium Icon
import DescriptionIcon from '@material-ui/icons/Description'; // CV Icon
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

function Main() {
    return (
        <div className="w-full main">
            <div className="flex flex-col p-8 md:p-16">
                <Fade left>
                    <div className="font-black text-6xl md:text-8xl p-4">
                        <h1>Sheil</h1>
                        <h1>Gandhi</h1>
                    </div>
                    <div className="font-medium text-base md:text-lg p-4 text-nowrap">
                        <p>Full Stack Developer seeking Internship</p>
                        <p>Learn Create Grow - That’s My Motto</p>
                    </div>
                    <Link href="#projects">
                        <div className="flex items-center justify-center bg-red-500 ml-4 p-4 mt-4 w-56 cursor-pointer">
                            <p className="text-white text-lg font-medium">Explore My Work</p>
                        </div>
                    </Link>
                </Fade>
                <Fade right>
                    <div className="hidden md:inline-flex absolute bottom-0 right-0  bg-red-500 h-3/4 w-3/6 
                rounded-tl-full rounded-tr-3xl rounded-br-none rounded-bl-none">
                        {/* Image needs better css */}
                        {/* <Image src='/bgr.png' alt='me' width={1500} height={1499} className="hidden lg:inline-flex absolute bottom-0 object-contain" /> */}
                    </div>
                    <div className="flex pt-4 pl-2 md:absolute bottom-0 right-0 md:h-3/4 w-3/6">
                        <div className="flex justify-between opacity-100 md:flex-col items-center md:justify-center w-full md:opacity-75 text-black md:text-white">
                            <a href="https://github.com/sheilgandhi" target="_blank"><GitHubIcon className="m-2" /></a>
                            <a href="https://www.linkedin.com/in/sheilgandhi/" target="_blank"><LinkedInIcon className="m-2" /></a>
                            <a href="https://medium.com/@sheilgandhi" target="_blank"><CreateIcon className="m-2" /></a>
                            <a href="/CV.pdf" target="_blank"><DescriptionIcon className="m-2" /></a>
                        </div>
                    </div>
                </Fade>
            </div>
            {/* <Image src="/arrow.svg" alt='me' width={32} height={32} className="absolute bottom-0 left-5 animate-bounce" /> */}
        </div>
    )
}

export default Main
