import Image from 'next/image';
import github from "@/images/icons/github.png";
import twitter from "@/images/icons/twitter.png";
import linkedIn from "@/images/icons/linkedIn.png";
import instagram from "@/images/icons/instagram.png";
import whatsapp from "@/images/icons/whatsapp.png";
import gmail from "@/images/icons/gmail.png";
import phone from "@/images/icons/phone.png";
import { Meteors } from '@/components/ui/meteors';

const ContactPage = () => {
    const emailAddress = 'dharadarsh0@gmail.com';
    const phoneNumber = "+918926130730";

    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="grid grid-cols-2 grid-rows-3 gap-4 max-w-md p-8 rounded-lg bg-gray-600">
                <div className="flex items-center">
                    <a href="https://twitter.com/adarsh_builds" target="_blank">
                        <Image src={twitter} alt="Twitter" width={50} height={50} />
                    </a>
                    <p className="text-lg text-white">Twitter</p>
                </div>
                <div className="flex items-center">
                    <a href="https://www.instagram.com/adarsh__dhar/" target="_blank">
                        <Image src={instagram} alt="Instagram" width={50} height={50} />
                    </a>
                    <p className="text-lg text-white">Instagram</p>
                </div>
                <div className="flex items-center">
                    <a href="https://www.linkedin.com/in/adarsh-dhar-a7a836180/" target="_blank">
                        <Image src={linkedIn} alt="LinkedIn" width={50} height={50} />
                    </a>
                    <p className="text-lg text-white">LinkedIn</p>
                </div>
                <div className="flex items-center">
                    <a href="https://github.com/Adarsh-Dhar" target="_blank">
                        <Image src={github} alt="Github" width={50} height={50} />
                    </a>
                    <p className="text-lg text-white">Github</p>
                </div>
                <div className="flex items-center">
                    <a href={`mailto:${emailAddress}`} className="text-blue-500 hover:text-blue-600">
                        <Image src={gmail} alt="Gmail" width={50} height={50} />
                    </a>
                    <p className="text-lg text-white">Email</p>
                </div>
                <div className="flex items-center mb-10">
                    <a href={`tel:${phoneNumber}`} className="text-blue-500 hover:text-blue-600 mt-10">
                        <Image src={phone} alt="phone" width={50} height={50} />
                    </a>
                    <p className="text-lg text-white mt-10"> Phone</p>
                </div>
            </div>
            <div className='bg-black'>
                <Meteors number={400}/>
            </div>
        </div>
    );
};

export default ContactPage;
