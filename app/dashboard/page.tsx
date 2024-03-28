"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Meteors } from "@/components/ui/meteors";
import achievements from "@/images/achievements.jpg"
import projects from "@/images/projects.jpg"

import contacts from "@/images/contacts.jpg"

import techstack from "@/images/techstack.jpg"


export default function Dashboard() {
  return (
    <div className="flex flex-wrap justify-between bg-black">
      {/* Top Row */}
      <div className="w-full md:w-1/2 mb-4">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group card dark:hover:shadow-2xl dark:hover:shadow-emerald-500-[0.1] dark:bg-black dark:border-white-[0.2] border-black-[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Projects
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              This are my projects made with lots of love
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src={projects}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover:card-shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Go to Projects
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      {/* Add another card for the top row here */}
      <div className="w-full md:w-1/2 mb-4">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group card dark:hover:shadow-2xl dark:hover:shadow-emerald-500-[0.1] dark:bg-black dark:border-white-[0.2] border-black-[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Achievements
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              All of my achievements 
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src={achievements}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover:card-shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
             
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Go To Achievements
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      <div className="w-full md:w-1/2 mb-4">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group card dark:hover:shadow-2xl dark:hover:shadow-emerald-500-[0.1] dark:bg-black dark:border-white-[0.2] border-black-[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Techstack
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              These are all the techs I know (I am still learning)
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src={techstack}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover:card-shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Go to TechStack
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      {/* Add another card for the top row here */}
      <div className="w-full md:w-1/2 mb-4">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group card dark:hover:shadow-2xl dark:hover:shadow-emerald-500-[0.1] dark:bg-black dark:border-white-[0.2] border-black-[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Contacts
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Contact me here
            </CardItem>
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <Image
                src={contacts}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover:card-shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Contact me
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      <Meteors number={400}/>
      </div>)}
