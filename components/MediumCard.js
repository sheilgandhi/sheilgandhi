import { ImageSharp } from "@material-ui/icons"
import Image from "next/image"

function MediumCard({ img, name, desc, url, rating }) {
    return (
        <div className="w-80 h-60 m-2 p-8 bg-white rounded-3xl shadow-lg justify-items-stretch">
            <div className="w-14">
                {
                    img ?
                <Image src={img} alt={name} width={208} height={208} className="rounded-full object-contain -z-10" />
                : <ImageSharp />
                }
            </div>
            <div className="flex flex-col justify-aevenly">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-base">{name}</h1>
                    {
                        rating &&
                        <p className="text-opacity-80 text-gray-500 -mr-2">⭐ {rating}</p>
                    }
                </div>
                <p className="text-sm truncate">{desc}</p>
                <div className="mt-6">
                    <a href={url} target="_blank" className="bg-red-500 p-2 flex items-center justify-center text-white font-bold w-28" >Read More</a>
                </div>
            </div>
            
        </div>
    )
}

export default MediumCard
