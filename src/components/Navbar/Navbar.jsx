import React, { useState } from 'react';
import SQCommercial from '../../assets/SQCommercialServices.png';
import { Link as ScrollLink } from 'react-scroll';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='z-[9999] w-full text-white bg-charcoalPrimary shadow-xl '>
            <div className='flex flex-row items-center justify-between mx-auto max-w-[1400px] py-1 px-4'>
                <ScrollLink
                    to='Banner'
                    smooth={true}
                    duration={500}
                    className='cursor-pointer'
                >
                    <div className='h-auto w-24 md:w-40 flex justify-center items-center py-1'>
                        <img src={SQCommercial} alt="Bethmar Logo" className='w-full h-auto' />
                    </div>
                </ScrollLink>
                <div className='hidden md:flex ml-auto px-[16px] md:px-[32px] items-center gap-4 md:gap-8 font-poppins text-sm md:text-base'>
                    <ScrollLink
                        to='Home'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer md:text-lg'
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to='Services'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer md:text-lg'
                    >
                        Services
                    </ScrollLink>
                    <ScrollLink
                        to='About'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer md:text-lg'
                    >
                        About Us
                    </ScrollLink>
                </div>
                <div className='hidden md:flex'>
                    <ScrollLink
                        to='Contact'
                        smooth={true}
                        duration={500}
                        className='cursor-pointer md:text-lg px-6 py-1 text-white font-bold bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600'
                    >
                        Contact Us
                    </ScrollLink>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <IoMdClose className="transition-transform transform rotate-180 duration-300 text-orangeAccent-600" />
                        ) : (
                            <IoMdMenu className="transition-transform transform rotate-0 duration-300 text-orangeAccent-600" />
                        )}
                    </button>
                </div>
            </div>
            {
                menuOpen && (
                    <div className="md:hidden flex flex-col items-start gap-4 mt-4 rounded-lg py-2 px-4">
                        <ScrollLink
                            to='Home'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b border-orangeAccent-700 w-full'
                            onClick={toggleMenu}
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            to='Services'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b border-orangeAccent-700 w-full'
                            onClick={toggleMenu}
                        >
                            Services
                        </ScrollLink>
                        <ScrollLink
                            to='About'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer border-b border-orangeAccent-700 w-full'
                            onClick={toggleMenu}
                        >
                            About
                        </ScrollLink>
                        <ScrollLink
                            to='Contact'
                            smooth={true}
                            duration={500}
                            className='cursor-pointer px-6 py-1 text-base text-white font-bold bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600'
                        >
                            Contact Us
                        </ScrollLink>
                    </div>
                )
            }
        </div >
    )
}

export default Navbar;
