import Image from "next/image";
import nextImage from "@/images/techstack-icons/nextjs.svg";
import nodeImage from "@/images/techstack-icons/nodejs.svg";
import postgresImage from "@/images/techstack-icons/postgresql.svg";
import prismaImage from "@/images/techstack-icons/prisma-orm.svg";
import reactImage from "@/images/techstack-icons/react.svg";
import tailwindImage from "@/images/techstack-icons/tailwind-css.svg";
import typescriptImage from "@/images/techstack-icons/typescript.svg";
import solidityImage from "@/images/techstack-icons/solidity.svg";
import { Meteors } from "@/components/ui/meteors";

export default function Techstack() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-full max-w-md p-8 rounded-lg bg-gray-600">
        <div className="grid grid-rows-8 gap-4">
          <div className="flex items-center">
            <Image src={nextImage} alt="nextjs" width={50} height={50} />
            <div className="h-4 bg-gray-800 rounded-md" style={{ width: "60%" }}></div>
          </div>
          <div className="flex items-center">
            <Image src={nodeImage} alt="nodejs" width={50} height={50} />
            <div className="h-4 bg-gray-800 rounded-md" style={{ width: "100%" }}></div>
          </div>
          <div className="flex items-center">
            <Image src={postgresImage} alt="postgressql" width={50} height={50} />
            <div className="h-4 bg-gray-800 rounded-md" style={{ width: "100%" }}></div>
          </div>
          <div className="flex items-center">
            <Image src={prismaImage} alt="prismaorm" width={50} height={50} />
            <div className="h-4 bg-gray-800 rounded-md" style={{ width: "60%" }}></div>
          </div>
          <div className="flex items-center">
            <Image src={reactImage} alt="react" width={50} height={50} />
            <div className="h-4 bg-gray-800 rounded-md" style={{ width: "80%" }}></div>
          </div>
          <div className="flex items-center">
            <Image src={tailwindImage} alt="tailwind" width={50} height={50} />
            <div className="h-4 bg-gray-800 rounded-md" style={{ width: "40%" }}></div>
          </div>
          <div className="flex items-center">
            <Image src={typescriptImage} alt="typescript" width={50} height={50} />
            <div className="h-4 bg-gray-800 rounded-md" style={{ width: "60%" }}></div>
          </div>
          <div className="flex items-center">
            <Image src={solidityImage} alt="solidity" width={50} height={50} />
            <div className="h-4 bg-gray-800 rounded-md" style={{ width: "20%" }}></div>
          </div>
        </div>
      </div>
      <Meteors number={300} />
    </div>
  );
}
