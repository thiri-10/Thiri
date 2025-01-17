"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";


import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../components/WorkSliderBtns";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const projects = [
    {
        num: '01',
        category: 'fullstack',
        title: 'TodoList & Note Taking website',
        description: `This is my very first project with laravel.It took a lot of time for me since I did this on my own without
        much knowledgde and actual experience.`,
        stack: [
            { name: 'Html 5 ' }, { name: 'Css 3' }, { name: 'Laravel' },{name: 'Mysql'}
        ],
        image: '/project/project-1.jpg',
        live: 'https://youtu.be/IuptDo2gECs?si=1Y4RzCSnO8hvH2uI',
        github: 'https://github.com/thiri-10/Todolist/tree/master'
    },
    {
        num: '02',
        category: 'frontend',
        title: 'E-commerce',
        description: "E-commerce with Next.Js ",
        stack: [
            { name: 'Html 5 ' }, { name: 'Tailwind Css' }, { name: 'Next.Js' },{name: 'Redux'}
        ],
        image: '/project/project-2.jpg',
        live: 'https://ecommerce-one-theta-66.vercel.app',
        github: 'https://github.com/thiri-10/Ecommerce'
    },
    {
        num: '03',
        category: 'frontend',
        title: 'MBTI Test',
        description: "Mbti testing website - I encourage you to be yourself and embrace yourself",
        stack: [
            { name: 'Tailwind Css' }, { name: 'Particle Js' }, { name: 'Next.Js' }
        ],
        image: '/project/project-3.jpg',
        live: 'https://mbti-testing.vercel.app',
        github: 'https://github.com/thiri-10/MBTITesting'
    },
    {
        num: '04',
        category: 'frontend',
        title: 'DisneyCharacter',
        description: "Just a fun project to enjoy the journey of learning",
        stack: [
            { name: 'Tailwind Css' },  { name: 'Next.Js' }
        ],
        image: '/project/project-4.jpg',
        live: 'https://disney-characters-dc.vercel.app/',
        github: 'https://github.com/thiri-10/disney-characters'
    },

]
export default function Work() {
    const [project, SetProject] = useState(projects[0]);

    const handleSlideChange = (swiper: { activeIndex: any; }) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update proejct state based on current slide index
        SetProject(projects[currentIndex])

    }
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeIn" }
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[450px] 
                flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-8xl leading-none font-extrabold 
                        text-transparent text-outline text-accent">
                            {project.num}
                        </div>
                        {/* project category */}
                        <h2 className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category}
                        </h2>
                        {/* project description */}
                        <p className="text-white/60">{project.title}</p>

                        <p className="text-white/60">{project.description}</p>
                        {/* stack */}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index) => {
                                return <li key={index} className="text-xl text-accent">
                                    {item.name}
                                    {index !== project.stack.length - 1 && ","}
                                </li>
                            })}
                        </ul>
                        {/* border */}
                        <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div className="flex items-center gap-4">
                            {/* live project button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] 
                                    rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl 
                                        group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* github project button */}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] 
                                    rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl 
                                        group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}>
                        {projects.map((project, index) => {
                            return (<SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center 
                                items-center bg-pink-50/20">
                                    {/* overlay */}
                                    <div className="absolute
                                    top-0 bottom-0 w-full h-full bg-black/10
                                    z-10 "></div>
                                    {/* image */}
                                    <div className="relative w-full h-full">
                                        <Image src={project.image}
                                            fill className="object-cover"
                                            alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            );
                        })}
                        {/* slider buttons */}
                        <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 
                        bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between 
                        xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-yellow-400
                        text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center
                        transition-all " iconsStyles="rounded-lg" />
                    </Swiper>
                </div>

            </div>
        </div>
    </motion.div>
}