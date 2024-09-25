import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdArrowRight } from 'react-icons/md';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(formData.email.includes("@")) || (formData.email.length === 0)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!formData.fullName || !formData.email) {
            setError('Please fill all required fields and select an option.');
            return;
        }

        setError(null);

        setFormData({
            fullName: '',
            email: '',
            companyName: '',
        });

    };

    return (
        <section id='Contact' className="flex items-center justify-center py-12">
            <main className='flex flex-col md:flex-row justify-center w-full max-w-[1400px] px-4'>
                <div className='w-full md:w-4/12 flex flex-col items-start justify-center'>
                    <h4 className='font-bold tracking-wider mb-1'>Email Us</h4>
                    <p className='font-normal text-charcoalPrimary-400 pb-6'>info@sqcommercial.co.uk</p>

                    <h4 className='font-bold tracking-wider mb-1'>Call Us</h4>
                    <p className='font-normal text-charcoalPrimary-400 pb-6'>+44 7818245108</p>
                </div>
                <div className='w-full md:w-8/12'>
                    <form onSubmit={handleSubmit} className='text-black flex flex-col items-start justify-center w-full'>
                        <h2 className='text-center text-3xl lg:text-5xl font-bold text-black mb-16'>
                            Get in touch and lets get to work
                        </h2>
                        <div className='flex flex-col w-full space-y-3'>
                            {/* Full Name Input */}
                            <div className='border border-charcoalPrimary-600 rounded-xl w-full px-8 py-2 flex flex-col shadow-md'>
                                <label htmlFor="fullName" className='text-lg tracking-wider font-normal '>Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    placeholder='John Doe'
                                    className='text-lg tracking-wider font-normal text-neutral-100 bg-transparent outline-none py-1'
                                />
                            </div>

                            {/* Email Input */}
                            <div className='border border-charcoalPrimary-600 rounded-xl w-full px-8 py-2 flex flex-col shadow-md'>
                                <label htmlFor="email" className='text-lg tracking-wider font-normal '>Your Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder='JohnDoe@example.com'
                                    className='text-lg tracking-wider font-normal text-neutral-100 bg-transparent outline-none py-1'
                                />
                            </div>

                            {/* Company Name Input */}
                            <div className='border border-charcoalPrimary-600 rounded-xl w-full px-8 py-2 flex flex-col shadow-md'>
                                <label htmlFor="companyName" className='text-lg tracking-wider font-normal '>Company Name (optional)</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    placeholder='JohnDoeLimited'
                                    className='text-lg tracking-wider font-normal text-neutral-100 bg-transparent outline-none py-1'
                                />
                            </div>
                            <div className='pt-12'>
                                {/* Submit Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className='bg-orangeAccent hover:bg-neutral-800 text-white px-8 py-2 font-bold text-lg flex items-center justify-center'
                                >
                                    Submit
                                    <MdArrowRight size={20} />
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </section>
    );
};

export default Contact;
