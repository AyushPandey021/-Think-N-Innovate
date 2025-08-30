import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const duration = 1500;
      const yearsTarget = 5;
      const projectsTarget = 100;
      const clientsTarget = 50;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        setYears(Math.floor(progress * yearsTarget));
        setProjects(Math.floor(progress * projectsTarget));
        setClients(Math.floor(progress * clientsTarget));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setYears(yearsTarget);
          setProjects(projectsTarget);
          setClients(clientsTarget);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#ebeffa] py-10 sm:py-14 px-4 sm:px-6 lg:px-12 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-14">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Exceptional After-School Programs at
          </h2>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-indigo-500 mb-4 sm:mb-6">
            About Us
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-lg">
            At GEMS Schools, our after-school activities have earned a stellar
            5-star rating for delivering outstanding quality and engaging
            experiences. Our programs are thoughtfully designed to enhance
            students’ skills and interests while ensuring a fun and enriching
            environment.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white px-5 py-4 sm:px-6 sm:py-5 rounded-xl shadow-lg text-center w-28 sm:w-36 md:w-40">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500">
                {years}+
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Years Experience
              </p>
            </div>
            <div className="bg-white px-5 py-4 sm:px-6 sm:py-5 rounded-xl shadow-lg text-center w-28 sm:w-36 md:w-40">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">
                {projects}+
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Projects Completed
              </p>
            </div>
            <div className="bg-white px-5 py-4 sm:px-6 sm:py-5 rounded-xl shadow-lg text-center w-28 sm:w-36 md:w-40">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500">
                {clients}+
              </p>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="relative px-5 sm:px-7 py-2.5 sm:py-3 mt-2 rounded-full text-white font-semibold 
            bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg 
            hover:scale-105 transition-transform duration-300 
            before:absolute before:inset-0 before:rounded-full 
            before:bg-gradient-to-r before:from-purple-400 before:to-blue-400 
            before:blur-md before:opacity-75 before:-z-10">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          {/* Back rotated box */}
          <div className="absolute w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 bg-gradient-to-r from-purple-600 to-blue-500 shadow-2xl rounded-2xl transform rotate-6"></div>

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="About Us"
            className="w-48 h-36 sm:w-64 sm:h-48 md:w-80 md:h-60 object-cover rounded-2xl shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
