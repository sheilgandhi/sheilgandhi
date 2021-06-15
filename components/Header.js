import Image from 'next/image'

function Header() {
    return (
        <div className="w-screen[-100px] top-0 z-50 bg-white flex items-center p-10 h-10 shadow-md">
            {/* Image */}
            <div className="flex items-center w-24 -ml-4 md:w-48 md:pl-20 lg:w-56">
               <Image src="/logo.png" alt="me" width={163} height={30} />
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
