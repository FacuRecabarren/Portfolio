import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Projects from '@/components/Projects/Projects'
import Studies from '@/components/Studies/Studies'


const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Studies/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Home