import Image from 'next/image'

function Header() {
    return (
        <div className="max-w-full top-0 z-50 bg-white flex items-center p-10 h-10 shadow-md">
            {/* Image */}
            <div className="flex items-center w-24 -ml-4 md:w-48 md:pl-20 lg:w-56">
                <div className="hidden md:inline-flex" >
                    <Image src="/logo.png" alt="me" width={163} height={30} />
                </div>
                <div className="inline-flex md:hidden" >
                    <Image src="/logo_small.png" alt="me" width={21} height={13} />
               </div>
            </div>
            {/* Right */}   
            <div className="flex items-center sm:space-x-2 justify-end absolute right-0">
                <p className="inline-flex text-smwhitespace-nowrap font-semibold px-3 cursor-pointer">Home</p>
                <p className="inline-flex text-smwhitespace-nowrap font-semibold px-3 cursor-pointer">About</p>
                <p className="inline-flex text-smwhitespace-nowrap font-semibold px-3 cursor-pointer">Projects</p>
                <p className="inline-flex text-smwhitespace-nowrap font-semibold px-3 cursor-pointer">Medium</p>
                <p className="inline-flex text-smwhitespace-nowrap font-semibold px-3 cursor-pointer">Contact</p>
            </div>
        </div>
    )
}

export default Header
