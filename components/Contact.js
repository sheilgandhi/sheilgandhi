import Image from "next/image";
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import { useForm } from 'react-hook-form';
import axios from 'axios'
// import { useToast } from '../hooks/useToast';

function Contact() {
    const { register, handleSubmit, errors, reset } = useForm();

    async function onSubmitForm(values) {
        let config = {
          method: 'post',
          url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: values,
        };

        try {
            const response = await axios(config);
            console.log(response);
            if (response.status == 200) {
            reset();
            toast(
                'success',
                'Thank you for contacting us, we will be in touch soon.'
            );
            }
        } catch (err) {}
    }

    return (
        <div className="flex flex-row max-w-full h-screen" id="contact">
            <div className="hidden object-contain lg:inline-flex items-center justify-center w-4/6 bg-red-500">
                <Pulse>
                    <Image src="/contact_still.svg" width={400} height={400} layout='intrinsic'/>
                </Pulse>
            </div>
            <div className="w-80 flex flex-col items-start justify-start p-10">     
                <RubberBand>   
                {/* Header */}
                <div className="flex flex-col items-start justify-between">
                    <h1 className="font-black text-6xl pb-2 text-red-500">Let's Connect</h1>
                    <p className="overflow-clip font-normal text-lg w-96">Flick me a message and let's make something together!</p>
                </div>
                {/* Details */}
                <div className="flex flex-col z-10 justify-evenly">
                    <div className="my-3">
                        <form method="post" action="https://formsubmit.co/6cdebe3054ee699997e54cbc8bc37e9b">
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="text" placeholder="Your Name" required className="bg-red-100 text-xl font-thin p-4 border-transparent w-96 my-3" />
                            <input type="email" placeholder="Your Email" required className="bg-red-100 text-xl font-thin p-4 border-transparent w-96 my-3" />
                            <textarea placeholder="Project Details" required style={{ resize: 'none' }} className="bg-red-100 text-xl font-thin p-4 border-transparent w-96 h-40 my-3" />
                            <div className="">
                                <button className="flex items-center justify-center bg-red-500 p-4 my-3 w-56 cursor-pointer text-white text-lg font-medium">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                </RubberBand>   
            </div>
        </div>
    )
}
export default Contact

