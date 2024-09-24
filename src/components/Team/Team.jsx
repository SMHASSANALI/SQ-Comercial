import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
    return (
        <section id='Team' className='flex justify-center items-center py-12 my-12'>
            <main className='max-w-[1400px] flex flex-col items-center justify-center px-4'>
                <h4 className='uppercase text-base font-regular text-orangeAccent mb-2'>Meet Our Team</h4>
                <motion.h2 initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1, ease: 'easeIn' }} className='font-bold text-3xl md:text-5xl tracking-wider mb-10'>Visionary Guidance</motion.h2>
                <p className='text-lg font-light tracking-normal leading-snug max-w-5xl text-center text-charcoalPrimary-500 pb-4'>Our team of dedicated consulting professionals is committed to delivering hands-on support and expertise, driving our
                    clients success with unwavering motivation.</p>
                <p className='text-lg font-regular tracking-normal leading-snug max-w-6xl text-center'>Our team is comprised of seasoned professionals with extensive experience across Private Equity firms, Fortune 100 companies,
                    and middle and lower middle market businesses. We founded SQ Commercial Services to focus on our true passions and provide
                    exceptional support to the clients we value working with.</p>
            </main>
        </section>
    )
}

export default Team