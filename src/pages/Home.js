import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Experience from '../components/experience/Experience'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import Navbar from '../components/navbar/Navbar'
import Portfolio from '../components/portfolio/Portfolio'
import Service from '../components/service/Service'
//import Subscribe from '../components/subscribe/Subscribe'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Service />
        <Contact />
        {/* <Subscribe /> */}
        <Footer />
    </div>
  )
}

export default Home