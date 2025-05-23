import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <motion.section
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'linear' }}
      id="CTA"
      className="flex items-center justify-center bg-charcoalPrimary pt-12 pb-4"
    >
      <main className="flex flex-col max-w-[1400px] w-full items-start justify-start px-4">
        <h2 className="text-orangeAccent font-bold text-3xl md:text-5xl mb-4">Let's Get Started</h2>
        <p className="text-white text-lg tracking-widest leading-tight max-w-[890px] font-semibold">
          Reach out to SQ Commercial Services to explore how we can drive profitable
          growth for your company.
        </p>
        <div className="pt-8 mx-auto">
          <Link
            to="/contact"
            className="cursor-pointer px-6 py-2 text-white font-bold md:text-lg bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600"
          >
            Contact Us
          </Link>
        </div>
      </main>
    </motion.section>
  );
};

export default CTA;