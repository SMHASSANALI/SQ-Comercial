import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import bannerImage from '../../assets/bannerImg/infrastructureServices.png'
import { motion } from 'framer-motion'

const Banner = () => {

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const buttonVariants = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }
    return (
        <section id='Home' className='flex items-center justify-center bg-charcoalPrimary min-h-[80vh] py-12'>
            <div className='flex flex-col md:flex-row max-w-[1400px] justify-center items-center px-4'>
                <div className='flex flex-col justify-center w-full md:w-6/12'>
                    <h1 className='text-3xl md:text-6xl font-bold text-white mb-8 md:max-w-2xl'>From Civil Engineering to Fiber Optics,<br /> We Build it All.</h1>
                    <p className='text-white text-lg font-light mb-16 md:max-w-xl'>SQ Commercial Services provides expert consultancy to develop innovative
                        strategies that drive sustainable growth and long-term success for our clients.</p>

                    <motion.div
                        variants={containerVariants}
                        initial={'initial'}
                        whileInView={'animate'}
                        viewport={{ once: true }}
                        className='flex flex-row items-center justify-start gap-4'>
                        <motion.div
                            variants={buttonVariants}>
                            <ScrollLink
                                to='Contact'
                                smooth={true}
                                duration={500}
                                className='cursor-pointer px-6 py-2 text-white font-bold md:text-lg bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600'
                            >
                                Contact Us
                            </ScrollLink>
                        </motion.div>
                        <motion.div
                            variants={buttonVariants}
                        >
                            <ScrollLink
                                to='Services'
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className='cursor-pointer px-6 py-2 text-orangeAccent font-bold md:text-lg border border-orangeAccent'
                            >
                                Our Services
                            </ScrollLink>
                        </motion.div>
                    </motion.div>
                </div>
                <div className='w-full md:w-6/12'>
                    <img src={bannerImage} alt="Infrastructure Services" />
                </div>
            </div>
        </section>
    )
}

export default Banner