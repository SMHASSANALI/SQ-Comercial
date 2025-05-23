import React from "react";
import { Link } from "react-router-dom";
import Services from "../components/Services/Services";
import { motion } from "framer-motion";
import telecomServices from "../assets/svgs/telecomServices.svg";
import fibreServices from "../assets/svgs/fibreServices.svg";
import civilServices from "../assets/svgs/civilServices.svg";
import waterServices from "../assets/svgs/waterServices.svg";

const ServicesPage = () => {
  const detailedServices = [
    {
      id: "telecom",
      title: "Telecom",
      icon: telecomServices,
      description:
        "Our telecom services provide end-to-end solutions for communication networks, including the installation and maintenance of base stations, antennas, and cabling systems. We ensure reliable voice, data, and video services for both mobile and fixed-line networks, leveraging the latest technologies to optimize performance and scalability.",
      benefits: [
        "High-speed, reliable communication networks",
        "Scalable solutions for growing demands",
        "Expert maintenance and support",
      ],
    },
    {
      id: "fibre",
      title: "Fibre Broadband",
      icon: fibreServices,
      description:
        "We specialize in deploying high-speed fiber optic networks to deliver unparalleled internet connectivity. From laying cables to connecting networks, our team ensures optimal performance, low latency, and seamless integration with existing infrastructure.",
      benefits: [
        "Ultra-fast internet speeds",
        "Enhanced reliability and low latency",
        "Customized solutions for urban and rural areas",
      ],
    },
    {
      id: "civil",
      title: "Civil",
      icon: civilServices,
      description:
        "Our civil engineering services focus on designing and constructing robust infrastructure such as roads, bridges, and buildings. We prioritize sustainability and efficiency, delivering projects that meet stringent industry standards and support community growth.",
      benefits: [
        "Durable and sustainable infrastructure",
        "Timely project delivery within budget",
        "Expertise in large-scale civil projects",
      ],
    },
    {
      id: "water",
      title: "Water",
      icon: waterServices,
      description:
        "We provide innovative water management solutions, including the design, construction, and maintenance of water storage tanks and distribution systems. Our approach ensures secure, efficient, and sustainable water management tailored to client needs.",
      benefits: [
        "Secure and efficient water storage",
        "Sustainable water management systems",
        "High-quality materials for durability",
      ],
    },
  ];

  const caseStudies = [
    {
      title: "5G Network Deployment in Urban Centers",
      service: "Telecom",
      description:
        "We deployed a 5G network across multiple urban areas, enhancing connectivity for thousands of users with minimal downtime.",
      icon: telecomServices,
    },
    {
      title: "Fiber Optic Expansion for Rural Communities",
      service: "Fibre Broadband",
      description:
        "Connected 5,000 rural households with high-speed fiber broadband, bridging the digital divide.",
      icon: fibreServices,
    },
    {
      title: "City Bridge Reconstruction",
      service: "Civil",
      description:
        "Reconstructed a major city bridge using sustainable materials, completed ahead of schedule.",
      icon: civilServices,
    },
    {
      title: "Water Tank Installation for Industrial Complex",
      service: "Water",
      description:
        "Designed and installed a large-scale water storage system for an industrial client, ensuring reliable water supply.",
      icon: waterServices,
    },
  ];

  const faqs = [
    {
      question: "What types of telecom services do you offer?",
      answer:
        "We provide comprehensive telecom solutions, including base station installation, antenna setup, cabling, and network maintenance for both mobile and fixed-line networks.",
    },
    {
      question: "How do you ensure the reliability of fiber broadband?",
      answer:
        "Our fiber broadband services include rigorous testing and quality assurance to ensure low latency, high speed, and consistent connectivity across all installations.",
    },
    {
      question: "Can you handle large-scale civil engineering projects?",
      answer:
        "Yes, our team has extensive experience in designing and constructing large-scale infrastructure like roads, bridges, and buildings, with a focus on sustainability and efficiency.",
    },
    {
      question: "What makes your water management solutions sustainable?",
      answer:
        "We use high-quality, eco-friendly materials and design systems that optimize water usage and reduce waste, ensuring long-term sustainability.",
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

  const faqVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-[80vh] py-12">
      <div className="">
        {/* Introduction Section */}
        <section className="py-12 bg-charcoalPrimary text-white h-[60vh] flex items-center">
          <div className="text-center max-w-[1400px] mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Comprehensive Infrastructure Solutions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              SQ Commercial Services delivers expert consultancy and execution
              in telecom, fiber broadband, civil engineering, and water
              management to drive sustainable growth.
            </p>
            <Link
              to="/contact"
              className="px-6 py-2 text-white font-bold md:text-lg bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600"
            >
              Get a Quote
            </Link>
          </div>
        </section>

        {/* Existing Services Component */}
        <Services />

        {/* Detailed Services Section */}
        <section className="py-12 bg-white max-w-[1400px] mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-charcoalPrimary mb-8 text-center">
            Explore Our Services
          </h2>
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                id={service.id}
                className="flex flex-col md:flex-row items-center gap-8 p-6 bg-charcoalPrimary-50 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
              >
                <div className="w-full md:w-4/12">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="size-20 mx-auto md:mx-0"
                  />
                </div>
                <div className="w-full md:w-8/12">
                  <h3 className="text-2xl font-bold text-charcoalPrimary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base text-charcoalPrimary-400 mb-4">
                    {service.description}
                  </p>
                  <ul className="list-disc pl-5 text-charcoalPrimary-400">
                    {service.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Case Studies Section */}
        <section className="py-12 bg-charcoalPrimary text-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Our Success Stories
            </h2>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="p-6 bg-white text-charcoalPrimary rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_0_rgba(0,0,0,0.3)] transition-shadow"
                >
                  <img
                    src={study.icon}
                    alt={study.title}
                    className="size-14 mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-base text-charcoalPrimary-400 mb-2">
                    Service: {study.service}
                  </p>
                  <p className="text-base text-charcoalPrimary-400">
                    {study.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoalPrimary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4 max-w-[1400px] mx-auto"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={faqVariants}
                  className="border-b border-charcoalPrimary-200"
                >
                  <h3 className="text-xl font-bold text-charcoalPrimary py-2">
                    {faq.question}
                  </h3>
                  <p className="text-base text-charcoalPrimary-400 pb-4">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-charcoalPrimary text-white text-center">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Contact SQ Commercial Services to discuss how we can support your
              next project with our expert consultancy.
            </p>
            <Link
              to="/contact"
              className="px-6 py-2 text-white font-bold md:text-lg bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicesPage;
