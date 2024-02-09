import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  const { t, i18n } = useTranslation()

  useEffect(()=>{
    Aos.init({duration: 3000});
    Aos.refresh();
  },[])

  const description = i18n.language === 'en' ? <p className="text-center font-light lg:px-28 xl:text-xl">I am 22 years old and my passion is centered on technology and the <span className="text-palette-500 font-semibold italic">web development</span>. What I value most when I work in a team is the <span className="text-palette-500 font-semibold italic">effective communication</span> and empathy, in order to achieve better results. I am currently leading a <span className="text-palette-500 font-semibold italic">freelance project</span> where I provide efficient and creative solutions to enhance <span className="text-palette-500 font-semibold italic">web sites</span> and take them to the next level.</p> : <p className="text-center font-light lg:px-28 xl:text-xl">Tengo 22 años y mi pasión se centra en la tecnología y el <span className="text-palette-500 font-semibold italic">desarrollo web</span>. Lo que más valoro cuando trabajo en equipo es la <span className="text-palette-500 font-semibold italic">comunicación efectiva</span> y la empatía, para así lograr mejores resultados. Actualmente lidero un <span className="text-palette-500 font-semibold italic">proyecto freelance</span> donde brindo soluciones eficientes y creativas para potenciar <span className="text-palette-500 font-semibold italic">sitios web</span> y llevarlos al próximo nivel.</p>

  return (
    <div data-aos="fade" id="about" className="lg:px-28 px-8 pt-16 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-palette-500 font-bold border-b-2 border-palette-500 rounded-lg xl:text-4xl w-max">{t("about")}</h2>
        <section className="flex flex-col justify-center items-center pt-10 xl:pt-16">
            {description}
        </section>
    </div>
  )
}

export default About