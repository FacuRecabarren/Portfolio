import { FaExternalLinkAlt } from "react-icons/fa";

const Studies = () => {
  return (
    <div className="px-8 lg:px-28">
        <section className="flex flex-col justify-center items-center gap-5 lg:flex-row pt-10 xl:pt-16">
            <article className="p-5 flex flex-col justify-center gap-4 border-b-2 lg:border-b-0 lg:border-r-2">
                <div className="flex justify-between items-center gap-5 border-2 border-accent rounded-lg">
                    <p className="py-2 px-4 xl:text-xl">Secundaria</p>
                    <p className="bg-accent py-2 xl:py-4 xl:text-xl xl:w-[10rem] px-4 w-[8rem] flex justify-center items-center">2015 - 2020</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                    <h2 className="font-bold xl:text-2xl">Técnico petroquímico</h2>
                    <p className="xl:text-lg text-sm opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed accusantium doloremque laboriosam asperiores officiis</p>
                </div>
                <a href="" className="flex justify-start items-center gap-2 bg-palette-600 w-max py-2 px-4 rounded-lg cursor-pointer font-semibold transform hover:scale-105 duration-300 hover:opacity-80 xl:text-xl shadow-sombra-btn-proyects">Certificado <FaExternalLinkAlt/></a>
            </article>
            <article className="p-5 flex flex-col justify-center gap-4 lg:border-b-0">
                <div className="flex justify-between items-center gap-5 border-2 border-accent rounded-lg">
                    <p className="py-2 px-4 xl:text-xl">Bootcamp</p>
                    <p className="bg-accent py-2 xl:py-4 xl:text-xl xl:w-[10rem] px-4 w-[8rem] flex justify-center items-center">2023</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                    <h2 className="font-bold xl:text-2xl">Full Stack Web Developer</h2>
                    <p className="xl:text-lg text-sm opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed accusantium doloremque laboriosam asperiores officiis</p>
                </div>
                <a href="" className="flex justify-start items-center gap-2 bg-palette-600 w-max py-2 px-4 rounded-lg cursor-pointer font-semibold transform hover:scale-105 duration-300 hover:opacity-80 xl:text-xl shadow-sombra-btn-proyects">Certificado <FaExternalLinkAlt/></a>
            </article>
            <article className="p-5 flex flex-col justify-center gap-4 border-t-2 lg:border-t-0 lg:border-l-2">
                <div className="flex justify-between items-center gap-5 border-2 border-accent rounded-lg">
                    <p className="py-2 px-4 xl:text-xl">Carrera</p>
                    <p className="bg-accent py-2 xl:py-4 xl:text-xl xl:w-[10rem] px-4 w-[8rem] flex justify-center items-center">2022 - 2023</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                    <h2 className="font-bold xl:text-2xl">Professional Developer</h2>
                    <p className="xl:text-lg text-sm opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sed accusantium doloremque laboriosam asperiores officiis</p>
                </div>
                <a href="" className="flex justify-start items-center gap-2 bg-palette-600 w-max py-2 px-4 rounded-lg cursor-pointer font-semibold transform hover:scale-105 duration-300 hover:opacity-80 xl:text-xl shadow-sombra-btn-proyects">Certificado <FaExternalLinkAlt/></a>
            </article>
        </section>
    </div>
  )
}

export default Studies