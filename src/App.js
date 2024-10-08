import '@fontsource-variable/oswald';
import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import About from './components/About';
import { Helmet } from 'react-helmet';
import Aos from 'aos';
import Testimonial from './components/Testimonial';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';



const App = () => {

  useEffect(()=>{
    Aos.init()
  },[])


  return (
    <>
    <Helmet>
      <title>PORTFOLIO | FAROOQ</title>  
    </Helmet>    
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Testimonial />
      <Blog />
      <Contact />
    </div>
    </>
  )
}

export default App