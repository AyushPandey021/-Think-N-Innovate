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
    <div className="w-full">
      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-16 px-6 text-center overflow-hidden">
        {/* Animated Background Glow */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"
        />

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold relative z-10"
        >
          Ready to Ignite Your Child's Potential?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl opacity-90 relative z-10"
        >
          Join our community of future innovators today! Book a free trial and
          see the difference.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-lg hover:shadow-2xl transition-all relative z-10"
        >
          Get Started Now →
        </motion.button>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#0c2461] text-white py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Socials */}
          <div>
            <div className="bg-white text-indigo-600 font-bold w-14 h-14 flex items-center justify-center rounded-lg mb-4">
              TNI
            </div>
            <p className="text-sm opacity-80 mb-4">
              Think-N-Innovate: Fostering excellence in innovation and
              entrepreneurship for young minds in Dubai.
            </p>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-indigo-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-indigo-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-indigo-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Information</h3>
            <p className="flex items-center gap-2 mb-2">
              <MdLocationOn /> Damac Smart Heights Office No 905, Barsha Heights
              Tecom, Dubai, UAE
            </p>
            <p className="flex items-center gap-2 mb-2">
              <MdEmail /> info@thinkinnovate.com
            </p>
            <p className="flex items-center gap-2 mb-2">
              <FaPhoneAlt /> +971555362193
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +971585850422
            </p>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Popular Courses</h3>
            <ul className="space-y-2">
              {[
                "Innovate Engineer",
                "Innovate Theatre",
                "Innovate Fit",
                "Innovate Fashion",
                "Innovate Pro",
              ].map((course, idx) => (
                <li
                  key={idx}
                  className="hover:translate-x-2 transition-all cursor-pointer"
                >
                  ➜ {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Policy</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "Refund and Reschedule"].map(
                (policy, idx) => (
                  <li
                    key={idx}
                    className="hover:translate-x-2 transition-all cursor-pointer"
                  >
                    ➜ {policy}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <p className="text-center mt-10 text-sm opacity-70">
          © {new Date().getFullYear()} Think-N-Innovate. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default FooterSection;
