import { IoLogoJavascript, IoLogoNodejs  } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiRedux, SiPostgresql, SiExpress, SiHibernate  } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  const { t } = useTranslation()

  useEffect(()=>{
    Aos.init({duration: 2500});
  },[])

  return (
    <div data-aos="fade" id="home" className="h-screen flex flex-col justify-center items-center gap-10 bg-background sm:flex-row sm:px-10 pt-12 sm:pt-0">
      <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1707401291/Portfolio%20FR/Polygon_Luminary_4_aiou4p.svg" alt="" className="absolute z-0 h-screen w-screen object-cover"/>
        <section className="flex flex-col justify-center items-center gap-8 xl:gap-12 sm:w-1/2 z-10">
            <h1 id="titleDeveloper" className="text-center font-extrabold text-5xl lg:text-7xl xl:text-[5.5rem] text-palette-500 m-0">Full Stack Web Developer</h1>
            <h2 className="text-center text-palette-200 font-light xl:text-2xl xl:px-8 px-5">{t("description")}</h2>
            <div className="flex justify-center items-center gap-3">
                <IoLogoJavascript title="JavaScript" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <IoLogoReact title="ReactJs" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <SiRedux title="Redux" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <IoLogoNodejs title="NodeJs" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <SiExpress title="Express" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <SiTailwindcss title="Tailwind" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <FaJava title="Java" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <BiLogoSpringBoot title="SpringBoot" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <SiHibernate title="Hibernate" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
                <SiPostgresql title="PostgreSQL" className="text-2xl lg:text-4xl cursor-pointer hover:animate-rotate-center-opacity text-palette-500"/>
            </div>
        </section>
        <section className="z-10">
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1683905409/Facu_Bariloche-7_ypts38-Instagram_feed_q8xbuf.jpg" alt="" className="rounded-full w-[20rem] sm:w-[25rem] xl:w-[30rem]"/>
        </section>
        <SlArrowDown className="hidden sm:flex absolute bottom-[10rem] lg:hidden text-5xl text-palette-500 animate-bounce"/>
    </div>
  )
}

export default Hero