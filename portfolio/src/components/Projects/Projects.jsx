import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaReact, FaNodeJs, FaGithub, FaJava, FaAws, FaHtml5, FaBootstrap } from "react-icons/fa6";
import { SiExpress, SiRedux, SiTailwindcss, SiSequelize, SiPostgresql, SiSpring, SiHibernate, SiExpo } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";
import { GrMysql } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    const { t, i18n } = useTranslation()

    useEffect(()=>{
        Aos.init({duration: 3000});
        Aos.refresh();
      },[])

    const projects = [
        {id: 1, name: "M&J Agency", description: i18n.language === "en" ? "This project was developed for the company M&J Agency, providing detailed information about the company, the services they offer, the team that integrates it and a contact section to resolve any questions you may have." : "Este proyecto fue desarrollado para la empresa M&J Agency, proporcionando información detallada sobre la empresa, los servicios que ofrecen, el equipo que la integra y una sección de contacto para resolver cualquier consulta que puedas tener.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707144180/Portfolio%20FR/www.mjagency.info__Nest_Hub_Max_pw55pp.png", deploy: <a href="https://www.mjagency.info/" target="_blank" className="bg-palette-600 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 hover:opacity-80 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>, languages: <><FaReact/><SiTailwindcss/><FaHtml5/></>},
    
        {id: 2, name: "Shoes FR", description: i18n.language === "en" ? "On this website we offer a wide range of shoes, where you can explore their prices, sizes and descriptions. In addition, we have a management section that gives you the facility to add, edit or delete both shoes and users." : "En este sitio web te ofrecemos una amplia gama de zapatillas, donde podrás explorar sus precios, tallas y descripciones. Además, disponemos de una sección de gestión que te brinda la facilidad de añadir, editar o eliminar tanto zapatillas como usuarios.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1705419825/localhost_5173_home_Nest_Hub_Max_o2gmxk.png",deploy: <a href="https://shoes-fr-front.onrender.com/" target="_blank" className="bg-palette-600 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 hover:opacity-80 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>, repository: <a href="https://github.com/FacuRecabarren/shoes-fr" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>, languages: <><FaReact/><SiExpress/><FaNodeJs/><SiRedux/><SiTailwindcss/><SiSequelize/><SiPostgresql/></>},

        {id: 3, name: "Los Nogales", description: i18n.language === "en" ? "This page was created for the brewery bar 'Los Nogales', where you can make reservations, view their detailed menu and get information about the services they offer. In addition, you have the option to choose between Spanish or English." : "Esta página fue creada para el bar cervecero 'Los Nogales', donde podrás reservar, visualizar su menú detallado e informarte sobre los servicios que ofrecen. Además, cuenta con la opción de elegir entre los idiomas español o inglés.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1708547712/Nogales/losnogales.vercel.app__Nest_Hub_Max_rpvajr.png",deploy: <a href="https://losnogales.vercel.app/" target="_blank" className="bg-palette-600 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 hover:opacity-80 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>, repository: <a href="https://github.com/FacuRecabarren/Los-Nogales" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>, languages: <><FaReact/><SiTailwindcss/><FaHtml5/></>},
    
        {id: 4, name: "Sonidos Reservados", description: i18n.language === "en" ? "Here you will find a wide variety of instruments for booking. You can log in to check the availability of dates. As an administrator user you can access the administration section to manage users and instruments." : "Aquí encontrarás una gran variedad de instrumentos para reservar. Puedes iniciar sesión para verificar la disponibilidad de fechas. Siendo usuario administrador puedes acceder a la sección de administración para gestionar usuarios e instrumentos.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707404260/localhost_8080__Nest_Hub_Max_u6hkyg.png", repository: <a href="https://github.com/E5-Intrumentos-Musicales/E5-PI-instrumentosMusicales" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>, languages: <><FaReact/><FaJava/><SiSpring/><SiHibernate/><FaAws/><SiSequelize/><GrMysql/></>},
    
        {id: 5, name: "Pizzolato Elizondo Seguros", description: i18n.language === "en" ? "This page was created for the insurance company 'Pizzolato Elizondo', where you can see their services in detail, learn a little more about the company, see their location and hours, and ask any questions you may have." : "Esta página fue creada para la empresa de seguros 'Pizzolato Elizondo', en la cual podrás ver sus servicios detalladamente, saber un poco más sobre la empresa, ver su ubicación y horarios, y realizar cualquier consulta que tengas.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1712869838/Portfolio%20FR/pizzolatoelizondoseguros.com__Nest_Hub_Max_kt4yqh.png", repository: <a href="https://github.com/Juane2305/elizondo-pizzolato" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>, deploy: <a href="https://pizzolatoelizondoseguros.com/" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>, languages: <><FaReact/><SiTailwindcss/><FaHtml5/></>},

        {id: 6, name: "Calicata", description: i18n.language === "en" ? "This was a page made for the travel agency Calicata. Within it you can see different travel packages, filter them and consult via WhatsApp the package you are interested in. It also has translation into three different languages." : "Esta fue una página realizada para la agencia de viajes Calicata. Dentro de ella podrás ver diferentes paquetes de viajes, filtrarlos y consultar vía WhatsApp el paquete que te haya interesado. También cuenta con traducción a tres idiomas diferentes.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1712870205/Portfolio%20FR/calicatatoursandtravel.tur.ar__Nest_Hub_Max_h1sjnd.png", repository: <a href="https://github.com/FacuRecabarren/calicata" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>, deploy: <a href="https://calicatatoursandtravel.tur.ar/" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>, languages: <><FaReact/><SiTailwindcss/><FaHtml5/></>},
    
        {id: 7, name: "Pomodoro", description: i18n.language === "en" ? "In this mobile application, you can take advantage of the Pomodoro method to optimize your time. The app has a button to start the clock, which will also emit a pleasant ringing sound. You can also pause the time and reset it according to your needs." : "En esta aplicación móvil, podrás aprovechar el método Pomodoro para optimizar tu tiempo. La app cuenta con un botón para iniciar el reloj, que además emitirá un agradable sonido de timbre. También podrás pausar el tiempo y resetearlo según tus necesidades.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707144037/Portfolio%20FR/Dise%C3%B1o_sin_t%C3%ADtulo_dn2ncn.png", repository: <a href="https://github.com/FacuRecabarren/react-native-pomodoro" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>, deploy: <a href="https://expo.dev/@facureca/react-native-pomodoro?serviceType=classic&distribution=expo-go" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>, languages: <><TbBrandReactNative/><SiExpo/><FaHtml5/></>},
    
        {id: 8, name: "Calculadora IMC", description: i18n.language === "en" ? "This application will allow you to know your Body Mass Index (BMI) and receive personalized recommendations to improve your weight. In addition, you will have access to detailed information on how BMI varies in people with different characteristics." : "Esta aplicación te permitirá conocer tu Índice de Masa Corporal (IMC) y recibir recomendaciones personalizadas para mejorar tu peso. Además, tendrás acceso a información detallada sobre cómo el IMC varía en personas con diferentes características.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707143539/Portfolio%20FR/bmi-calculator-facurecabarren.vercel.app__Nest_Hub_Max_qx7q1u.png", repository: <a href="https://github.com/FacuRecabarren/bmi-calculator" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>, deploy: <a href="https://bmi-calculator-facurecabarren.vercel.app/" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>, languages: <><FaReact/><FaBootstrap/><FaHtml5/></>},
    
        {id: 9, name: "To do app", description: i18n.language === "en" ? "In this application, you will have the ability to record up to five tasks to carry out during the day. If at any time you need to make modifications to your tasks, you will be able to edit them, delete them and also mark them as completed." : "En esta aplicación, tendrás la capacidad de registrar hasta cinco tareas para llevar a cabo durante el día. Si en algún momento necesitas realizar modificaciones en tus tareas, podrás editarlas, eliminarlas y tambien marcarlas como completadas.", image: "https://res.cloudinary.com/dreso9ye9/image/upload/v1707143675/Portfolio%20FR/todoapp-fr.vercel.app__Nest_Hub_Max_uf2zte.png", repository: <a href="https://github.com/FacuRecabarren/toDoApp" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><FaGithub/></a>, deploy: <a href="https://todoapp-fr.vercel.app/" target="_blank" className="bg-palette-600 hover:opacity-80 py-2 px-10 rounded-lg text-xl xl:text-2xl transform hover:scale-105 duration-300 shadow-sombra-btn-proyects cursor-pointer" rel="noreferrer"><GoLinkExternal/></a>, languages: <><FaReact/><SiTailwindcss/><FaHtml5/></>}
    ]


  return (
    <div data-aos="fade" id="projects" className="px-16 lg:px-28 pt-10 lg:pt-24 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-palette-500 font-bold border-b-2 border-palette-500 rounded-lg xl:text-4xl w-max">{t("projectTitle")}</h2>
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
                        <img src={project.image} alt="" className="shadow-custom"/>
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
                                {project.repository}
                                {project.deploy}
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