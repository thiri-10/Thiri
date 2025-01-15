'use client';

import {FaHtml5,FaCss3, FaJs,FaReact,FaNodeJs, FaLaravel, FaPhp, FaGit} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiRedux} from "react-icons/si";

// about data
const about = {
    title: "About me",
    description: "My Profile",
    info: [
        {
            fieldName: 'Name',
            fieldValue: "Thiri",
        },
        {
            fieldName: 'Phone',
            fieldValue: "(+959) 973135489",
        },
        {
            fieldName: 'Experience',
            fieldValue: "6 months",
        },
        {
            fieldName: 'Nationality',
            fieldValue: "Myanmar",
        },
        {
            fieldName: 'Email',
            fieldValue: "thiri7301@gmail.com",
        },
        {
            fieldName: 'Languages',
            fieldValue: "English - intermediate , Burmese - native",
        },
    ]
};
// experience data
const  experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: `Even though I still don't have experience, I am willing to learn and work hard to give my best.
    But I have this one hackathon experience which is wonderful and it gives me some insight knowledge on how
    real-world working situation and environment might be.`,
    items: [
        {
            company: " MJC-Myanmar-Japan Center,JICA - Japan International Cooperation Agency",
            position: "Job-Matching Hackathon 2023",
            duration: "2023 ( Dec 9th - 16th) "
        },
      
    ]
}

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Education",
    items: [
        {
            institution: " MJC -Myanmar-Japan Center, JICA - Japan International Cooperation Agency",
            degree: " Job-Matching Hackathon 2023",
            duration: "2023 ( Dec 9th - 16th) - in-person"
        },
        {
            institution: " University of Taxila",
            degree: "three-credit course in Career Readiness and Professsional Development(CRPD)",
            duration: " 2022( Dec 19th -Jan30th 2023 ) - full shcolarship(online) "
        },
        {
            institution: " University of Taxila ",
            degree: "Certificate in Basic leadership and capacity development",
            duration: " 2020( Jan 23rd- 24th) - Two days workshop program (in-person)"
        },
        {
            institution: " Technological university -Monywa",
            degree: " Information Technology(IT) -  third year",
            duration: "2017-2020"
        },

    ]
}

// skills data
const skills = {
    title: "My skills",
    description: "I am willing to learn new skills",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html 5'
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"

        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <SiRedux />,
            name: "Redux"

        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaPhp />,
            name: "Php"

        },
        {
            icon: <FaLaravel />,
            name: "Laravel"
        },
        {
            icon: <FaGit />,
            name:"Git"
        }
    ]
}



import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Resume() {
    return <motion.div initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px]
                mx-auto xl:mx-0 gap-6 ">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full   ">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-extrabold text-white/60">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] 
                                            py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent text-md">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3 mt-4">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full
                                                    bg-accent"></span>
                                                    <p className="text-white/60 text-sm ">{item.company}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent value="education" className="w-full   ">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-extrabold text-white/60">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] 
                                            py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent text-md">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3 mt-4">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full
                                                    bg-accent"></span>
                                                    <p className="text-white/60 text-sm">{item.institution}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* skills */}
                    <TabsContent value="skills" className="w-full">
                        <div className="flex flex-col gap-[30px]  text-center xl:text-left">
                            
                                <h3 className="text-4xl font-extrabold text-white/60">{skills.title}</h3>
                                <p className="text-white/60">{skills.description}</p>
                         
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                        xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px]
                                            bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl 
                                                group-hover:text-accent transition-all duration-380">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize ">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    {/* about */}
                    <TabsContent value="about" className="w-full   ">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-extrabold text-white/60">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 ">{about.description}</p>
                            <ul className="gird grid-cols-1 xl:grid-cols-2 gap-y-6 
                            max-w-[620px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return <li key={index} className="flex items-center 
                                    justify-center xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-xl"> {item.fieldValue}</span>

                                    </li>
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                </div>
            </Tabs>
        </div>
    </motion.div>
} 