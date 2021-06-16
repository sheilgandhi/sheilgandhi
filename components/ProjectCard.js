import { ImageSharp } from "@material-ui/icons";
import Image from "next/image";

function ProjectCard({ img, name, desc, url }) {
    return (
        <div className="w-64 h-52 m-2 p-8 bg-white rounded-3xl shadow-lg justify-items-stretch">
            <div className="w-14">
                {
                    img ?
                <Image src={img} alt={name} width={208} height={208} className="rounded-full object-contain -z-10" />
                : <ImageSharp />
}
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-base">{name}</h1>
                    <p className="text-opacity-80 text-gray-500 -mr-2">⭐ 4.8</p>
                </div>
                <p className="text-sm truncate">{desc}</p>
                <div className="">
                    <a href={url} target="_blank" className="bg-red-500 mt-2 p-2 flex items-center justify-center text-white font-bold w-28" >Follow Me</a>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard
