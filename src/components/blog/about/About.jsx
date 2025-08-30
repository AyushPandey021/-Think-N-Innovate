import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const FooterSection = () => {
  return (
    <div className="w-full relative">
      {/* Animated CTA Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-16 px-4 sm:py-20 sm:px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Glowing Animated Circle */}
        <motion.div
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-white/10 rounded-full blur-3xl"
        />

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold relative z-10 leading-tight"
        >
          Ready to Ignite Your Child's Potential?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl opacity-90 relative z-10 max-w-xl sm:max-w-2xl"
        >
          Join our community of future innovators today! Book a free trial and
          see the difference.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-10 px-6 sm:px-10 py-3 sm:py-4 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-2xl transition-all text-sm sm:text-lg md:text-xl relative z-10"
        >
          Get Started Now →
        </motion.button>
      </div>

      {/* Footer Panels */}
      <footer className="bg-[#0c2461] py-12 sm:py-20 px-4 sm:px-6 md:px-20 relative z-10 text-gray-200">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-6">
          {/* Logo & Socials */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-[rgb(52,87,184)] bg-opacity-10 p-4 sm:p-6 rounded-2xl flex-1 flex flex-col items-center sm:items-start text-sm sm:text-base"
          >
            <div className=" text-blue-900 font-bold w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg mb-3 sm:mb-4 text-lg sm:text-xl">
              TNI
            </div>
            <p className="mb-2 sm:mb-4 text-center sm:text-left">
              Think-N-Innovate: Fostering excellence in innovation and
              entrepreneurship for young minds in Dubai.
            </p>
            <div className="flex space-x-4 sm:space-x-5 text-xl sm:text-2xl mt-2 sm:mt-3">
              <a href="#" className="hover:text-indigo-300 transition-all">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-indigo-300 transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-indigo-300 transition-all">
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="bg-[rgb(52,87,184)] bg-opacity-10 p-4 sm:p-6 rounded-2xl flex-1 text-sm sm:text-base"
          >
            <h3 className="font-bold mb-2 sm:mb-4 text-lg sm:text-xl">Contact Info</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center gap-1 sm:gap-2 hover:text-indigo-300 transition-all">
                <MdLocationOn /> Damac Smart Heights Office No 905, Dubai
              </li>
              <li className="flex items-center gap-1 sm:gap-2 hover:text-indigo-300 transition-all">
                <MdEmail /> info@thinkinnovate.com
              </li>
              <li className="flex items-center gap-1 sm:gap-2 hover:text-indigo-300 transition-all">
                <FaPhoneAlt /> +971555362193
              </li>
              <li className="flex items-center gap-1 sm:gap-2 hover:text-indigo-300 transition-all">
                <FaPhoneAlt /> +971585850422
              </li>
            </ul>
          </motion.div>

          {/* Popular Courses / Empty Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-[rgb(52,87,184)] bg-opacity-10 p-4 sm:p-6 rounded-2xl flex-1 text-sm sm:text-base"
          >
            <h3 className="font-bold mb-2 sm:mb-4 text-lg sm:text-xl">Popular Courses</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li className="hover:text-indigo-300 transition-all cursor-pointer">UI/UX Design Fundamentals</li>
              <li className="hover:text-indigo-300 transition-all cursor-pointer">Next.js Masterclass</li>
              <li className="hover:text-indigo-300 transition-all cursor-pointer">Python for Beginners</li>
              <li className="hover:text-indigo-300 transition-all cursor-pointer">Entrepreneurship 101</li>
            </ul>
          </motion.div>
        </div>

        <p className="text-center mt-10 text-sm sm:text-base opacity-70">
          © {new Date().getFullYear()} Think-N-Innovate. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default FooterSection;
