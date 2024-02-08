import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="bg-accent mt-10 h-16 flex justify-center items-center sm:justify-between px-10">
        <div className="hidden sm:flex">
            <p className="text-sm font-semibold">© 2024 Facundo Recabarren</p>
        </div>
        <div className="flex justify-center items-center gap-5">
            <a href="https://www.linkedin.com/in/facundorecabarren/" target="__blank">
                <FaGithub className="text-3xl sm:text-2xl cursor-pointer hover:animate-rotate-center-opacity"/>
            </a>
            <a href="https://github.com/FacuRecabarren" target="__blank">
                <FaLinkedin className="text-3xl sm:text-2xl cursor-pointer hover:animate-rotate-center-opacity"/>
            </a>
        </div>
    </footer>
  )
}

export default Footer