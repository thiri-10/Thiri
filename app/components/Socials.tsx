import Link from "next/link";
import { FaGithub,FaLinkedinIn,FaYoutube } from "react-icons/fa";

const socials = [
    {icon: <FaGithub/>,path:'https://github.com/thiri-10'},
    {icon: <FaLinkedinIn/>,path:'https://www.linkedin.com/in/thiri2000'},
    // {icon: <FaYoutube/>,path:'https://youtu.be/IuptDo2gECs?si=ath-RMRjoOfUaWE4'},
   
    
]

export default function Socials({containerStyles,iconStyles}:{containerStyles: any,iconStyles: any}){
    return (
        <div className={containerStyles}>
            {socials.map((item,index)=>{
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
})}
        </div>
    )
}