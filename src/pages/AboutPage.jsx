import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import { motion } from "framer-motion";

const AboutPage = () => {
  const historyTimeline = [
    {
      year: "2010",
      event: "Founded SQ Commercial Services, focusing on telecom consultancy.",
    },
    {
      year: "2015",
      event: "Expanded into fiber broadband and civil engineering projects.",
    },
    {
      year: "2018",
      event: "Completed first major water management project.",
    },
    {
      year: "2023",
      event: "Recognized as a leader in sustainable infrastructure solutions.",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "We strive for the highest standards in every project, delivering quality and reliability.",
    },
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies to drive progress and efficiency.",
    },
    {
      title: "Sustainability",
      description:
        "We prioritize eco-friendly solutions for long-term environmental impact.",
    },
    {
      title: "Collaboration",
      description:
        "We partner closely with clients to achieve shared goals and success.",
    },
  ];

  const teamMembers = [
    {
      name: "Syed Qadri",
      role: "CEO & Founder",
      bio: "With over 20 years in infrastructure consultancy, John leads with a vision for innovation and excellence.",
    },
    {
      name: "Sarah Smith",
      role: "Lead Engineer",
      bio: "Sarah specializes in civil engineering, delivering sustainable infrastructure solutions.",
    },
    {
      name: "Michael Brown",
      role: "Telecom Specialist",
      bio: "Michael drives our telecom projects with expertise in 5G and network optimization.",
    },
    {
      name: "Emily Davis",
      role: "Water Management Expert",
      bio: "Emily designs innovative water systems for efficient and sustainable management.",
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
    <section className="relative min-h-[80vh] py-12">
      <div className="">
        {/* Introduction Section */}
        <section className="py-12 bg-charcoalPrimary text-white h-[60vh] flex items-center text-center">
          <div className="text-center max-w-[1400px] mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              About SQ Commercial Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              We are a leading consultancy firm dedicated to delivering
              innovative infrastructure solutions in telecom, fiber broadband,
              civil engineering, and water management.
            </p>
            <Link
              to="/contact"
              className="px-6 py-2 text-white font-bold md:text-lg bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600"
            >
              Connect With Us
            </Link>
          </div>
        </section>

        {/* Existing About Component */}
        <About />

        {/* Company History Section */}
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoalPrimary mb-8 text-center">
              Our Journey
            </h2>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 max-w-2xl mx-auto"
            >
              {historyTimeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="flex items-center gap-4 p-4 bg-charcoalPrimary-50 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
                >
                  <span className="text-orangeAccent font-bold text-xl">
                    {item.year}
                  </span>
                  <p className="text-base text-charcoalPrimary-400">
                    {item.event}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission and Values Section */}
        <section className="py-12 bg-charcoalPrimary text-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Our Mission & Values
            </h2>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="p-6 bg-white text-charcoalPrimary rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_0_rgba(0,0,0,0.3)] transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-base text-charcoalPrimary-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Bios Section */}
        <Team />
        <section className="py-12 bg-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoalPrimary mb-8 text-center">
              Meet Our Experts
            </h2>
            <motion.div
              variants={containerVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="p-6 bg-charcoalPrimary-50 rounded-lg shadow-[0_0_10px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_0_rgba(0,0,0,0.3)] transition-shadow"
                >
                  <h3 className="text-xl font-bold text-charcoalPrimary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-base text-orangeAccent mb-2">
                    {member.role}
                  </p>
                  <p className="text-base text-charcoalPrimary-400">
                    {member.bio}
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
              Partner with Us
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Learn how SQ Commercial Services can drive your infrastructure
              projects to success. Get in touch today!
            </p>
            <Link
              to="/contact"
              className="px-6 py-2 text-white font-bold md:text-lg bg-orangeAccent border border-orangeAccent hover:border-orangeAccent-600 hover:bg-orangeAccent-600"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutPage;
