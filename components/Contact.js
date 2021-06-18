import Image from "next/image";
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Link from 'next/link'

function Contact() {
    return (
        <div className="flex flex-row w-screen max-w-full h-screen" id="contact">
            <div className="hidden object-contain lg:inline-flex items-center justify-center w-3/5 bg-red-500">
                <Pulse>
                    <Image src="/contact_still.svg" width={400} height={400} layout='intrinsic'/>
                </Pulse>
            </div>
            <div className="w-2/5 flex flex-col items-start justify-start p-10">     
                <RubberBand>   
                {/* Header */}
                <div className="flex flex-col items-start justify-between">
                    <h1 className="font-black text-6xl pb-2 text-red-500">Let's Connect</h1>
                    <p className="overflow-clip font-normal text-lg w-80">Flick me a message and let's make something together!</p>
                </div>
                {/* Details */}
                <div className="flex flex-col z-10 justify-evenly">
                    <div className="my-3">
                        <form method="post" action="https://formsubmit.co/6cdebe3054ee699997e54cbc8bc37e9b">
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="text" name="name" placeholder="Your Name" required className="bg-red-100 text-xl font-thin p-4 border-transparent w-80 my-3" />
                            <input type="email" name="email" placeholder="Your Email Address" required className="bg-red-100 text-xl font-thin p-4 border-transparent w-80 my-3" />
                            <textarea placeholder="Project Details" name="message" required style={{ resize: 'none' }} className="bg-red-100 text-xl font-thin p-4 border-transparent w-80 h-40 my-3" />
                            <div className="flex">
                                <button className="flex items-center justify-center bg-red-500 p-4 my-3 w-40 cursor-pointer text-white text-lg font-medium">Send</button>
                                <input type="reset" value="Clear" className="flex items-center justify-center bg-red-100 p-4 ml-1 my-3 w-40 cursor-pointer text-black text-lg font-medium" />
                            </div>
                        </form>
                        <Link href="/">
                            <div className="flex items-center justify-center bg-gray-200 p-4 mt-4 w-56 cursor-pointer">
                                <p className="text-black text-lg font-medium">Back to the top &#8593;</p>
                            </div>
                        </Link>
                    </div>
                </div>
                </RubberBand>   
            </div>
        </div>
    )
}
export default Contact

