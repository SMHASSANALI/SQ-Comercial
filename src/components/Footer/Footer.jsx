import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import SQCommercial from '../../assets/SQCommercialServices.png';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <section className='flex items-center justify-center bg-charcoalPrimary'>
            <main className='flex flex-col max-w-[1400px] w-full items-center justify-center px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center border-b-2 border-charcoalPrimary-600'>
                    <div className='md:w-6/12 py-2'>
                        <img src={SQCommercial} alt="SQ-Commercial Logo" className='w-2/4 pb-6' />
                        <p className='text-sm leading-tight tracking-tight max-w-md text-charcoalPrimary-900 pb-4'>At SQ Commercial Services, we are dedicated to understanding your unique challenges and delivering customized solutions
                            that drive innovation and success. Our client-centric approach emphasizes transparency, collabration, and excellence in all we do.
                        </p>
                        <div className='flex flex-row items-center justify-start gap-4'>
                            <span className='bg-charcoalPrimary-100 rounded-full p-1'><FaFacebookF size={20} className='text-white' /></span>
                            <span className='bg-charcoalPrimary-100 rounded-full p-1'><FaXTwitter size={20} className='text-white' /></span>
                            <span className='bg-charcoalPrimary-100 rounded-full p-1'><FaInstagram size={20} className='text-white' /></span>
                            <span className='bg-charcoalPrimary-100 rounded-full p-1'><FaLinkedinIn size={20} className='text-white' /></span>
                        </div>
                    </div>
                    <div className='md:w-6/12 md:py-2 flex flex-row items-center justify-around w-full py-8'>
                        <div>
                            <h4 className='text-orangeAccent font-bold'>Quick Links</h4>
                            <div className='h-1 w-6/12 bg-charcoalPrimary-900 mb-2'></div>
                            <ul className=' md:text-sm'>
                                <li className='tracking-tighter leading-tight'>
                                    <ScrollLink
                                        to='Home'
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer text-charcoalPrimary-900'
                                    >
                                        Home
                                    </ScrollLink>
                                </li>
                                <li className='tracking-tighter leading-tight'>
                                    <ScrollLink
                                        to='Services'
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer text-charcoalPrimary-900'
                                    >
                                        Services
                                    </ScrollLink>
                                </li>
                                <li className='tracking-tighter leading-tight'>
                                    <ScrollLink
                                        to='About'
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer text-charcoalPrimary-900'
                                    >
                                        About Us
                                    </ScrollLink>
                                </li>
                                <li className='tracking-tighter leading-tight'>
                                    <ScrollLink
                                        to='Contact'
                                        smooth={true}
                                        duration={500}
                                        className='cursor-pointer text-charcoalPrimary-900'
                                    >
                                        Contact Us
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-orangeAccent font-bold'>Follow Us</h4>
                            <div className='h-1 w-6/12 bg-charcoalPrimary-900 mb-2'></div>
                            <ul className='md:text-sm'>
                                <li className='tracking-tighter leading-tight'>
                                    <a href="#" target='_blank' className='text-charcoalPrimary-900'>Instagram</a>
                                </li>
                                <li className='tracking-tighter leading-tight'>
                                    <a href="#" target='_blank' className='text-charcoalPrimary-900'>Facebook</a>
                                </li>
                                <li className='tracking-tighter leading-tight'>
                                    <a href="#" target='_blank' className='text-charcoalPrimary-900'>LinkedIn</a>
                                </li>
                                <li className='tracking-tighter leading-tight'>
                                    <a href="#" target='_blank' className='text-charcoalPrimary-900'>Twitter</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between w-full py-2'>
                    <p className='text-sm text-charcoalPrimary-900 md:pb-0 pb-4'>Copyright © 2023 SQ Commercial Services. All Rights Reserved.</p>
                    <p className='text-sm text-charcoalPrimary-900 md:pb-0'>Designed and developed by <a href="https://www.saskasolutions.com" target="_blank" className='text-orangeAccent'>Saska Solutions</a></p>
                </div>
            </main>
        </section>
    )
}

export default Footer