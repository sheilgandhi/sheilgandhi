import Image from "next/image";

function Contact() {
    return (
        <div className="flex flex-row max-w-full h-screen">
            <div className="hidden object-contain md:inline-flex items-center justify-center md:w-2/3 w-4/6 bg-red-500 animate-pulse">
                <Image src="/contact_still.svg" width={500} height={500} layout='intrinsic' className="animate-pulse" />
            </div>
            <div className="w-2/6 flex flex-col items-start justify-start p-10">           
                {/* Header */}
                <div className="flex flex-col items-start justify-between">
                    <h1 className="font-black text-6xl pb-2 text-red-500">Let's Connect</h1>
                    <p className="overflow-clip font-normal text-lg w-96">Flick me a message and let's make something together!</p>
                </div>
                {/* Details */}
                <div className="flex flex-col z-10 justify-evenly">
                    <div className="my-3">
                        <input type="text" placeholder="Your Name" className="bg-red-100 text-xl font-thin p-4 border-transparent w-96 my-3" />
                        <input type="email" placeholder="Your Email" className="bg-red-100 text-xl font-thin p-4 border-transparent w-96 my-3" />
                        <textarea placeholder="Project Details" style={{ resize: 'none' }} className="bg-red-100 text-xl font-thin p-4 border-transparent w-96 h-40 my-3" />
                        <div className="flex items-center justify-center bg-red-500 p-4 my-3 w-56 cursor-pointer">
                            <button className="text-white text-lg font-medium animate-pulse">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

