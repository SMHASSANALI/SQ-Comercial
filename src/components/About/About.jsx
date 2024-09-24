import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section id='About' className='flex items-center justify-center bg-charcoalPrimary py-12'>
            <main className='flex flex-col md:flex-row max-w-[1400px] w-full items-start justify-start px-4'>
                <div className='md:w-2/12 flex flex-col mb-6'>
                    <h2 className='text-orangeAccent font-bold text-3xl md:text-5xl'>About Us</h2>
                    <div className='p-1 w-7/12 bg-white'></div>
                </div>
                <div className='md:w-10/12 flex flex-col md:ml-16 gap-y-8'>
                    <p className='text-white md:text-lg tracking-widest leading-tight'>At SQ Commercial Services, we are dedicated to being a leading
                        consultancy firm specializing in infrastructure solutions. Our expertise spans across telecom, fiber broadband, civil engineering,
                        and water works. We bring a wealth of experience and a commitment to excellence to every project, helping our clients achieve their
                        infrastructure goals with confidence.
                    </p>
                    <p className='text-white md:text-lg tracking-widest leading-tight'>Our mission is to provide innovative and reliable consultancy services that drive the successful
                        development and management of critical infrastructure. We are passionate about delivering solutions
                        that not only meet but exceed industry standards, ensuring sustainable growth and long-term value
                        for our clients.
                    </p>
                    <div className='pt-4'>
                        <ScrollLink
                            to='Team'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer px-6 py-2 text-orangeAccent font-bold md:text-lg border border-orangeAccent'
                        >
                            Our Values
                        </ScrollLink>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default About