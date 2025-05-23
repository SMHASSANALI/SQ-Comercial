import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Team from '../components/Team/Team';
import CTA from '../components/CTA/CTA';
import { motion } from 'framer-motion';
import civilServices from '../assets/svgs/civilServices.svg';
import fibreServices from '../assets/svgs/fibreServices.svg';
import telecomServices from '../assets/svgs/telecomServices.svg';
import waterServices from '../assets/svgs/waterServices.svg';

const Home = () => {
  const featuredServices = [
    {
      svg: telecomServices,
      title: 'Telecom',
      desc: 'Delivering robust communication networks with cutting-edge technology.',
      link: '/services#telecom',
    },
    {
      svg: fibreServices,
      title: 'Fibre Broadband',
      desc: 'High-speed internet solutions for seamless connectivity.',
      link: '/services#fibre',
    },
    {
      svg: civilServices,
      title: 'Civil',
      desc: 'Building durable infrastructure for roads, bridges, and more.',
      link: '/services#civil',
    },
    {
      svg: waterServices,
      title: 'Water',
      desc: 'Innovative water storage and management systems.',
      link: '/services#water',
    },
  ];

  const testimonials = [
    {
      quote: 'SQ Commercial transformed our telecom infrastructure with unmatched expertise.',
      author: 'Jane Smith, Telecom Corp',
    },
    {
      quote: 'Their fiber broadband solutions boosted our connectivity significantly.',
      author: 'Mark Johnson, Tech Solutions',
    },
    {
      quote: 'The civil engineering team delivered our project on time and within budget.',
      author: 'Emily Brown, City Planning',
    },
  ];

  const projects = [
    {
      title: '5G Network Expansion',
      desc: 'Deployed a state-of-the-art 5G network across urban areas.',
      icon: telecomServices,
    },
    {
      title: 'City Bridge Reconstruction',
      desc: 'Rebuilt a major city bridge with sustainable materials.',
      icon: civilServices,
    },
    {
      title: 'Fiber Optic Rollout',
      desc: 'Installed fiber broadband for 10,000 households.',
      icon: fibreServices,
    },
  ];

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative">
      <div className="z-[0] top-[5vh] md:top-[10vh]">
        {/* Existing Banner */}
        <Banner />

        {/* Featured Services Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoalPrimary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-charcoalPrimary-400 mb-8">
              Discover how SQ Commercial Services drives innovation in infrastructure.
            </p>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="flex flex-col items-start p-6 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_0_rgba(0,0,0,0.3)] transition-shadow"
                >
                  <img src={service.svg} alt={service.title} className="size-14 mb-4" />
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-base text-charcoalPrimary-400 mb-4">{service.desc}</p>
                  <Link
                    to={service.link}
                    className="text-orangeAccent font-bold hover:underline"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-charcoalPrimary">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-white mb-8">
              Hear from our satisfied clients about their experience with SQ Commercial Services.
            </p>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white p-6 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
                >
                  <p className="text-charcoalPrimary-400 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-bold text-charcoalPrimary">{testimonial.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoalPrimary mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-charcoalPrimary-400 mb-8">
              Explore some of our latest infrastructure projects.
            </p>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="flex flex-col items-start p-6 shadow-[0_0_10px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_0_rgba(0,0,0,0.3)] transition-shadow"
                >
                  <img src={project.icon} alt={project.title} className="size-14 mb-4" />
                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-base text-charcoalPrimary-400">{project.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8 text-center">
              <Link
                to="/services"
                className="px-6 py-2 text-white font-bold bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Existing Team and CTA */}
        <Team />
        <CTA />
      </div>
    </section>
  );
};

export default Home;