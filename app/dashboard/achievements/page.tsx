// pages/contact.js

import Image from 'next/image';
import Adarsh from "@/images/Adarsh.png";
import { Meteors } from '@/components/ui/meteors';

export default function Achievements() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='bg-black'>
            <Image src={Adarsh} alt='innov-a-thon' height={1000} width={1000} />
            <Meteors number={200}/>
        </div>
    );
}
