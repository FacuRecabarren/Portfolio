import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { FaReact, FaNodeJs, FaGithub, FaJava, FaSass, FaAws, FaHtml5, FaBootstrap } from "react-icons/fa6";
import { SiExpress, SiRedux, SiTailwindcss, SiSequelize, SiPostgresql, SiSpring, SiHibernate, SiExpo } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";
import { GrMysql } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";

const projects = [
    {id: 1, name: "M&J Agency", description: "En este sitio web te ofrecemos una amplia gama de zapatillas, donde podrás explorar sus precios, tallas y descripciones. Además, disponemos de una sección de gestión que te brinda la facilidad de añadir, editar o eliminar tanto zapatillas como usuarios.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707144180/Portfolio%20FR/www.mjagency.info__Nest_Hub_Max_pw55pp.png", repository: "https://github.com/FacuRecabarren/ShoesFR", deploy: "https://www.mjagency.info/", languages: <><FaReact/><SiTailwindcss/><FaHtml5/></>},
    {id: 2, name: "Shoes FR", description: "En este sitio web te ofrecemos una amplia gama de zapatillas, donde podrás explorar sus precios, tallas y descripciones. Además, disponemos de una sección de gestión que te brinda la facilidad de añadir, editar o eliminar tanto zapatillas como usuarios.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1705419825/localhost_5173_home_Nest_Hub_Max_o2gmxk.png", repository: "https://github.com/FacuRecabarren/ShoesFR", deploy: "https://shoesfr.vercel.app/", languages: <><FaReact/><SiExpress/><FaNodeJs/><SiRedux/><SiTailwindcss/><SiSequelize/><SiPostgresql/></>},
    {id: 3, name: "Sonidos Reservados", description: "Aquí encontrarás una gran variedad de instrumentos para reservar. Puedes iniciar sesión para verificar la disponibilidad de fechas. Siendo usuario administrador puedes acceder a la sección de administración para gestionar usuarios e instrumentos.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707404260/localhost_8080__Nest_Hub_Max_u6hkyg.png", repository: "https://github.com/E5-Intrumentos-Musicales/E5-PI-instrumentosMusicales", deploy: "https://shoesfr.vercel.app/", languages: <><FaReact/><FaJava/><SiSpring/><SiHibernate/><FaAws/><FaSass/><SiSequelize/><GrMysql/></>},
    {id: 4, name: "Mdz Automotores", description: "En esta página web, podrás ver los autos disponibles, conocer un poco sobre la historia de la empresa y encontrar un mapa con la ubicación exacta de nuestras instalaciones. Además, contamos con una sección de contacto donde podrás consultar tus dudas.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707143488/Portfolio%20FR/mdzautomotores.vercel.app__Nest_Hub_Max_1_hxfoff.png", repository: "https://github.com/FacuRecabarren/carswebsite", deploy: "https://mdzautomotores.vercel.app/", languages: <><FaReact/><SiTailwindcss/><FaHtml5/></>},
    {id: 5, name: "Pomodoro", description: "En esta aplicación móvil, podrás aprovechar el método Pomodoro para optimizar tu tiempo. La app cuenta con un botón para iniciar el reloj, que además emitirá un agradable sonido de timbre. También podrás pausar el tiempo y resetearlo según tus necesidades.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707144037/Portfolio%20FR/Dise%C3%B1o_sin_t%C3%ADtulo_dn2ncn.png", repository: "https://github.com/FacuRecabarren/carswebsite", deploy: "https://mdzautomotores.vercel.app/", languages: <><TbBrandReactNative/><SiExpo/><FaHtml5/></>},
    {id: 6, name: "Calculadora IMC", description: "Esta aplicación te permitirá conocer tu Índice de Masa Corporal (IMC) y recibir recomendaciones personalizadas para mejorar tu peso. Además, tendrás acceso a información detallada sobre cómo el IMC varía en personas con diferentes características.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707143539/Portfolio%20FR/bmi-calculator-facurecabarren.vercel.app__Nest_Hub_Max_qx7q1u.png", repository: "https://github.com/FacuRecabarren/carswebsite", deploy: "https://mdzautomotores.vercel.app/", languages: <><FaReact/><FaBootstrap/><FaHtml5/></>},
    {id: 7, name: "To do app", description: "En esta aplicación, tendrás la capacidad de registrar hasta cinco tareas para llevar a cabo durante el día. Si en algún momento necesitas realizar modificaciones en tus tareas, podrás editarlas, eliminarlas y tambien marcarlas como completadas.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707143675/Portfolio%20FR/todoapp-fr.vercel.app__Nest_Hub_Max_uf2zte.png", repository: "https://github.com/FacuRecabarren/carswebsite", deploy: "https://mdzautomotores.vercel.app/", languages: <><FaReact/><SiTailwindcss/><FaHtml5/></>}
]

const Projects = () => {
  return (
    <div id="projects" className="px-16 lg:px-28 pt-10 lg:pt-24 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-palette-500 font-bold border-b-2 border-palette-500 rounded-lg xl:text-4xl w-max">Proyectos</h2>
        <Carousel
        opts={{
            align: "start",
        }}
        className="w-full pt-10 xl:pt-16"
        >
        <CarouselContent>
            {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-accent border-none outline-none flex justify-center items-center">
                    <CardContent className="flex flex-col items-center justify-center p-6 gap-5">
                        <img src={project.image} alt="" className="shadow-sombra-imagenes"/>
                        <section className="flex flex-col justify-center items-center gap-5">
                            <div className="flex flex-col justify-start items-center gap-2 h-[13rem] lg:h-[10rem] xl:h-[9.5rem]">
                                <h2 className="font-bold text-xl text-white xl:text-2xl">{project.name}</h2>
                                <p className="text-center font-light text-sm opacity-70 xl:text-base">{project.description}</p>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="border-2 border-palette-400 flex justify-center items-center gap-3 rounded-lg p-2">
                                    {React.Children.toArray(project.languages.props.children).map((icon, index) => (
                                        <span key={index} className="text-palette-400 text-xl xl:text-2xl cursor-pointer hover:text-palette-500 hover:animate-rotate-center-opacity" >{icon}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-5">
                                <a href={project.repository} target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>
                                <a href={project.deploy} target="_blank" className="bg-palette-600 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 hover:opacity-80 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>
                            </div>
                        </section>
                    </CardContent>
                </Card>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="border-palette-500 text-white outline-none hover:opacity-80 hover:bg-palette-500 transform hover:scale-105 duration-500"/>
        <CarouselNext className="border-palette-500 text-white outline-none hover:opacity-80 hover:bg-palette-500 transform hover:scale-105 duration-500"/>
        </Carousel>
    </div>
  )
}

export default Projects