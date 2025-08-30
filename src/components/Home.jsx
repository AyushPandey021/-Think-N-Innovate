import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 font-extrabold text-xl text-purple-700">
          <span className="bg-purple-700 text-white px-2 py-1 rounded-lg">TNI</span>
          Think N Innovate
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Camps</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
          <a href="#">AI Tools</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col gap-4 px-6 pb-6 text-gray-700 md:hidden"
        >
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Courses</a>
          <a href="#">Camps</a>
          <a href="#">Blogs</a>
          <a href="#">Contact Us</a>
          <a href="#">AI Tools</a>
        </motion.div>
      )}
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="pt-24 w-full overflow-hidden bg-gradient-to-r from-white via-gray-50 to-purple-50 relative">
      
      {/* Floating 3D Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-52 h-52 bg-pink-400/30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 gap-12 relative z-10">
        
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
          <p className="mt-4 text-xl text-gray-600">
            Dubai’s Leading after-school activity center, instilling passion with education.
            Specially curated KHDA Certified Courses for kids to learn and explore.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
            <button className="px-6 py-3 bg-purple-700 text-xl hover:bg-purple-800 text-white rounded-full shadow-lg font-semibold transition">
              Book your Free Trial class now!
            </button>
            <div className="flex  text-xl items-center gap-2 text-purple-700 font-medium">
              <span className="text-2xl">🏅</span> KHDA Certified Excellence
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
  animate={{ y: [0, -15, 0] }}
  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
  className="relative w-full md:w-[450px] h-72 rounded-3xl flex items-center justify-center shadow-2xl p-[2px] bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300"
>
  <div className="w-full h-full rounded-3xl backdrop-blur-xl bg-white/80 flex flex-col items-center justify-center px-6 text-center">
    
    {/* Heading inside box */}
    <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-4 drop-shadow-md">
      ✨ Welcome to TNI ✨
    </h2>

    {/* Typewriter text */}
    <TypeAnimation
      sequence={[
        "Dubai’s Leading after-school activity center, instilling passion with education.",
        2000,
        "Book your Free Trial class now — KHDA Certified Excellence!",
        2000,
        "From sketches to runway, empower your child's fashion dreams.",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-900 via-purple-900 to-blue-600 drop-shadow-lg"
    />
  </div>
</motion.div>

        </motion.div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
};

export default LandingPage;
