import React from "react";
import { Link } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import { motion } from "framer-motion";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const ContactPage = () => {
  const locations = [
    {
      city: "London",
      address: "123 Infrastructure Way, London, UK",
      phone: "+44 7818245108",
      email: "london@sqcommercial.co.uk",
    },
    {
      city: "Manchester",
      address: "456 Connectivity Rd, Manchester, UK",
      phone: "+44 7818245109",
      email: "manchester@sqcommercial.co.uk",
    },
  ];

  const contactMethods = [
    {
      icon: <FaEnvelope size={24} className="text-orangeAccent" />,
      title: "Email Us",
      value: "info@sqcommercial.co.uk",
      link: "mailto:info@sqcommercial.co.uk",
    },
    {
      icon: <FaPhone size={24} className="text-orangeAccent" />,
      title: "Call Us",
      value: "+44 7818245108",
      link: "tel:+447818245108",
    },
    {
      icon: <FaFacebookF size={24} className="text-orangeAccent" />,
      title: "Facebook",
      value: "Follow us on Facebook",
      link: "#", // Replace with real link
    },
    {
      icon: <FaInstagram size={24} className="text-orangeAccent" />,
      title: "Instagram",
      value: "Follow us on Instagram",
      link: "#", // Replace with real link
    },
  ];

  const faqs = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "We aim to respond to all inquiries within 24 hours during business days.",
    },
    {
      question: "Can I schedule a consultation for my project?",
      answer:
        "Yes, please fill out the contact form or call us to arrange a consultation.",
    },
    {
      question: "Do you offer services outside the UK?",
      answer:
        "We primarily operate in the UK but can discuss international projects on a case-by-case basis.",
    },
  ];

  const testimonial = {
    quote:
      "SQ Commercial Services responded promptly and provided expert guidance for our telecom project.",
    author: "David Wilson, Tech Innovations",
  };

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
        <section className="py-12 bg-charcoalPrimary h-[60vh] text-white text-center flex items-center">
          <div className="text-center max-w-[1400px] mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get in Touch with SQ Commercial Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              We're here to help you achieve your infrastructure goals. Contact
              us today to discuss your project needs.
            </p>
            <Link
              to="#contact-form"
              className="px-6 py-2 text-white font-bold md:text-lg bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600"
            >
              Send Us a Message
            </Link>
          </div>
        </section>

        {/* Contact Form Section */}
        <Contact />

        {/* Office Locations Section */}
        {/* <section className="py-12 bg-white">
          <h2 className="text-3xl md:text-5xl font-bold text-charcoalPrimary mb-8 text-center">
            Our Offices
          </h2>
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-6 bg-charcoalPrimary-50 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_0_rgba(0,0,0,0.3)] transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <FaLocationDot size={24} className="text-orangeAccent" />
                  <h3 className="text-xl font-bold text-charcoalPrimary">{location.city}</h3>
                </div>
                <p className="text-base text-charcoalPrimary-400 mb-2">{location.address}</p>
                <p className="text-base text-charcoalPrimary-400 mb-2">
                  Phone: <a href={`tel:${location.phone}`} className="text-orangeAccent hover:underline">{location.phone}</a>
                </p>
                <p className="text-base text-charcoalPrimary-400">
                  Email: <a href={`mailto:${location.email}`} className="text-orangeAccent hover:underline">{location.email}</a>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section> */}

        {/* Contact Methods Section */}
        <section className="py-12 bg-charcoalPrimary text-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Other Ways to Reach Us
            </h2>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="p-6 bg-white text-charcoalPrimary rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_0_rgba(0,0,0,0.3)] transition-shadow"
                >
                  <div className="flex justify-center mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {method.title}
                  </h3>
                  <p className="text-base text-charcoalPrimary-400 text-center">
                    <a
                      href={method.link}
                      className="text-orangeAccent hover:underline"
                    >
                      {method.value}
                    </a>
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
              className="space-y-4 max-w-3xl mx-auto"
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

        {/* Testimonial Section */}
        <section className="py-12 bg-charcoalPrimary text-white text-center">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <motion.div
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto p-6 bg-white text-charcoalPrimary rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
            >
              <p className="text-base text-charcoalPrimary-400 italic mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-base font-bold">{testimonial.author}</p>
            </motion.div>
            <div className="mt-8">
              <Link
                to="#contact-form"
                className="px-6 py-2 text-white font-bold md:text-lg bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactPage;
