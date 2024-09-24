import React from 'react'
import { motion } from 'framer-motion'
import civilServices from '../../assets/svgs/civilServices.svg'
import fibreServices from '../../assets/svgs/fibreServices.svg'
import telecomServices from '../../assets/svgs/telecomServices.svg'
import waterServices from '../../assets/svgs/waterServices.svg'

const Services = () => {

    const cardData = [
        {
            svg: telecomServices,
            title: 'Telecom',
            desc: 'Telecom works involve installing and maintaining infrastructure for communication networks, including base stations, antennas, and cables. This ensures reliable voice, data, video services for mobile and fixed-line networks'
        },
        {
            svg: fibreServices,
            title: 'Fibre Broadband',
            desc: 'Fiber broadband works involve installing and maintaining fiber optic cables to deliver highspeed internet. This includes laying cables, connecting them to networks, and ensuring optimal performance for fast and reliable connectivity.'
        },
        {
            svg: civilServices,
            title: 'Civil',
            desc: 'Civil works involve designing, constructing, and maintaining infrastructure like roads, bridges, and buildings. It focuses on creating and improving essential public structures and facilities.'
        },
        {
            svg: waterServices,
            title: 'Water',
            desc: 'Building, and installing tanks to securely store and manage water. This process includes choosing the right materials, ensuring durability, and implementing effective systems for water distribution and management.'
        },
    ]

    const containerVariants = {
        animate: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section id='Services' className='flex items-center justify-center py-12'>
            <main className='flex flex-col px-8 max-w-[1400px] w-full items-start justify-start'>
                <div className='flex flex-col'>
                    <h4 className='uppercase text-lg font-semibold text-orangeAccent mb-6'>WHAT WE DO</h4>
                    <h2 className='font-bold text-3xl md:max-w-[720px] mb-4'>SQ Commercial Services {''}
                        <span className='text-charcoalPrimary'>is dedicated to helping our clients build and
                            sustain reliable infrastructure for long-term growth
                        </span>
                    </h2>
                    <h6 className='font-bold text-lg'>Our services include:</h6>
                </div>
                <motion.div
                    variants={containerVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    className='grid grid-col grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 pt-12'>
                    {cardData.map((card, index) => (
                        <motion.div variants={cardVariants} key={index} className='flex flex-col items-start justify-center px-4 md:px-8 py-8 shadow-[0_0_10px_0_rgba(0,0,0,0.4)]'>
                            <img src={card.svg} alt={card.title} className='size-14 mb-2' />
                            <h3 className='font-bold text-2xl mb-2'>{card.title}</h3>
                            <p className='text-base text-charcoalPrimary-400 leading-tight'>{card.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </section>
    )
}

export default Services