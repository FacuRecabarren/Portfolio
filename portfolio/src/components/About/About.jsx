
const About = () => {
  return (
    <div id="about" className="lg:px-28 px-8 pt-16 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-palette-500 font-bold border-b-2 border-palette-500 rounded-lg xl:text-4xl w-max">Sobre mí</h2>
        <section className="flex flex-col justify-center items-center pt-10 xl:pt-16">
            <p className="text-center font-light lg:px-28 xl:text-xl">Tengo 22 años y mi pasión se centra en la tecnología y el <span className="text-palette-500 font-semibold italic">desarrollo web</span>. Lo que más valoro cuando trabajo en equipo es la <span className="text-palette-500 font-semibold italic">comunicación efectiva</span> y la empatía, para así lograr mejores resultados. Actualmente lidero un <span className="text-palette-500 font-semibold italic">proyecto freelance</span> donde brindo soluciones eficientes y creativas para potenciar <span className="text-palette-500 font-semibold italic">sitios web</span> y llevarlos al próximo nivel.</p>
        </section>
    </div>
  )
}

export default About