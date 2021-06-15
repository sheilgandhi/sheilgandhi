import Image from "next/image"
import WebIcon from '@material-ui/icons/Web';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import CodeIcon from '@material-ui/icons/Code';

function AboutCard({ title, subtitle }) {
    return (
        <div className="flex flex-col items-start justify-end w-32 md:w-40 lg:w-60 h-36 md:h-64 lg:h-72 p-8 bg-gray-400 text-white mr-2 md:mr-3 lg:mr-5 hover:bg-red-500">
            {/* Icon */}
            <div className="text-base md:text-9xl">
                { title === 'Fullstack' ? 
                    <WebIcon /> 
                : title === 'User Experience' ? 
                    <FilterHdrIcon /> 
                : title === 'Software' ?
                    <CodeIcon />
                : null
                }
            </div>
            {/* Title */}
            <div className="font-bold text-xs md:text-xl">
            <p>{title}</p>
            </div>
            {/* Subtitle */}
            <div className="text-xs md:text-lg inline-flex font-thin cursor-pointer hover:underline ">
            <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default AboutCard
