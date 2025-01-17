
import Socials from "./components/Socials";
import Photo from "./components/Photo";
import Stats from "./components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Link from "next/link";




export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between
        lg:pt-8 lg:pb-24">
          {/* text */}
          <div className="text-center lg:text-left order-2 xl:order-none">
            <span className="text-xl text-white/60">Software Developer</span>
            <h1 className="h1 mb-6 text-white/60">Hello I'm <br /><span className="text-accent">Thiri</span></h1>
        <p className="text-white/60 mb-3">To start my career as a junior web developer in a challenging environment 
        <br/>that will provide me
 with opportunities to learn and enhance my technical <br/>and creative skills while developing
 innovative and efficient web solutions
            </p>

            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/Thiri-CV.pdf" download={true}>
              <Button  variant="outline" size="lg" className="flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border
                border-accent rounded-full flex justify-center items-center text-accent text-base
                hover:bg-accent hover:text-primary
                hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

          
        </div>
        {/* <Stats /> */}
      </div>
     
    </section>




  );
}
