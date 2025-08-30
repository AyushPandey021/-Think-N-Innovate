import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 gap-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            We Create Future{" "}
            <span className="text-purple-700">Innovators!</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Dubai’s Leading after-school activity center, instilling passion with education.
            Specially curated KHDA Certified Courses for kids to learn and explore.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <button className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full shadow-lg font-semibold transition">
              Book your Free Trial class now!
            </button>
            <div className="flex items-center gap-2 text-purple-700 font-medium">
              <span className="text-xl">🏅</span> KHDA Certified Excellence
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
         <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="flex-1 flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative w-screen md:w-[500px] h-64 rounded-6xl flex items-center justify-center p-[2px] 
        shadow-2xl"
      >
        {/* Glassy Background */}
        <div className="w-full h-full rounded-bl-2xl backdrop-blur-xl bg-red-800/10 flex items-center justify-center px-6 text-center">
          <TypeAnimation
            sequence={[
              "Dubai’s Leading after-school activity center, instilling passion with education. Specially curated KHDA Certified Courses for kids to learn and explore",
              2000,
              "Building tomorrow’s architects, one design at a time. Book your Free Trial class now — KHDA Certified Excellence",
              2000,
              "From sketches to runway, empower your child's fashion dreams.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg"
          />
        </div>
      </motion.div>
    </motion.div>

      </div>
    </div>
  );
};

export default HeroSection;
