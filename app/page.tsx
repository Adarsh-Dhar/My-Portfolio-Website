"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Home() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "To",
    },
    {
      text: "Portfolio",
    },
    {
      text: "Website",
    },
    {
      text: "of",
    },
    {
      text: "Adarsh",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Ayushman",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Dhar",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        So you clicked the link huh...
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        
      <Link href="/dashboard" passHref>
  <div className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm flex items-center justify-center cursor-pointer">
    Dashboard
  </div>
</Link>
        
      </div>
     <Meteors number={200}/>

    </div>
  );
}
