import React from "react";
import { Link } from "react-router-dom";
import SQCommercial from "../../assets/SQCommercialServices.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex items-center justify-center pt-[30px] pb-[10px]">
      <main className="flex flex-col max-w-[1400px] w-full items-center justify-center px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-charcoalPrimary-600">
          <div className="md:w-6/12 py-2">
            <img
              src={SQCommercial}
              alt="SQ-Commercial Logo"
              className="w-2/4 pb-6"
            />
            <p className="text-sm leading-tight tracking-tight max-w-md text-black pb-4">
              At SQ Commercial Services, we are dedicated to understanding your
              unique challenges and delivering customized solutions that drive
              innovation and success. Our client-centric approach emphasizes
              transparency, collaboration, and excellence in all we do.
            </p>
          </div>
          <div className="md:w-6/12 md:py-2 py-8 flex flex-col gap-4 md:h-[25vh]">
            <div className="flex flex-row md:mb-auto md:justify-end gap-8 w-full h-full">
              <div>
                <h4 className="text-orangeAccent font-bold">Quick Links</h4>
                <div className="h-0.5 w-6/12 bg-charcoalPrimary mb-2"></div>
                <ul className="md:text-sm">
                  <li className="tracking-tighter leading-tight">
                    <Link to="/" className="cursor-pointer text-black">
                      Home
                    </Link>
                  </li>
                  <li className="tracking-tighter leading-tight">
                    <Link to="/services" className="cursor-pointer text-black">
                      Services
                    </Link>
                  </li>
                  <li className="tracking-tighter leading-tight">
                    <Link to="/about" className="cursor-pointer text-black">
                      About Us
                    </Link>
                  </li>
                  <li className="tracking-tighter leading-tight">
                    <Link to="/contact" className="cursor-pointer text-black">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-orangeAccent font-bold">Follow Us</h4>
                <div className="h-0.5 w-6/12 bg-charcoalPrimary mb-2"></div>
                <ul className="md:text-sm">
                  <li className="tracking-tighter leading-tight">
                    <a href="#" target="_blank" className="text-black">
                      Instagram
                    </a>
                  </li>
                  <li className="tracking-tighter leading-tight">
                    <a href="#" target="_blank" className="text-black">
                      Facebook
                    </a>
                  </li>
                  <li className="tracking-tighter leading-tight">
                    <a href="#" target="_blank" className="text-black">
                      LinkedIn
                    </a>
                  </li>
                  <li className="tracking-tighter leading-tight">
                    <a href="#" target="_blank" className="text-black">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center md:justify-end gap-4">
              <span className="bg-charcoalPrimary-100 rounded-full p-1">
                <FaFacebookF size={20} className="text-white" />
              </span>
              <span className="bg-charcoalPrimary-100 rounded-full p-1">
                <FaXTwitter size={20} className="text-white" />
              </span>
              <span className="bg-charcoalPrimary-100 rounded-full p-1">
                <FaInstagram size={20} className="text-white" />
              </span>
              <span className="bg-charcoalPrimary-100 rounded-full p-1">
                <FaLinkedinIn size={20} className="text-white" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full py-2">
          <p className="text-sm text-black md:pb-0 pb-4">
            Copyright © 2024 SQ Commercial Services. All Rights Reserved.
          </p>
          <p className="text-sm text-black md:pb-0">
            Designed and developed by{" "}
            <a
              href="https://www.saskasolutions.com"
              target="_blank"
              className="text-orangeAccent"
            >
              Saska Solutions
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Footer;
