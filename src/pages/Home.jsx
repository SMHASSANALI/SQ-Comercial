import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Team from '../components/Team/Team'
import CTA from '../components/CTA/CTA'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <section className='relative'>
            <div className='fixed top-0 left-0 right-0 z-[999]'>
                <Navbar />
            </div>
            <div className='z-[0] top-[5vh] md:top-[10vh] relative'>
                <Banner />
                <Services />
                <About />
                <Team />
                <CTA />
                <Contact />
                <Footer />
            </div>
        </section>
    )
}

export default Home