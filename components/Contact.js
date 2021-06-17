function Contact() {
    return (
        <div className="flex flex-col max-w-full h-screen">
            <div className="flex flex-col md:flex-row items-start justify-between p-10">
            <h1 className="font-black text-6xl pl-10 pb-2 text-red-500">Let's Connect</h1>
            <p className="overflow-clip font-normal text-lg w-96">My name is Jeff</p>
            </div>

            <div className="hidden md:inline-flex bg-red-100 h-3/4 w-3/6 
                rounded-tl-3xl rounded-tr-full rounded-br-none rounded-bl-none"></div>
        </div>
    )
}

export default Contact

