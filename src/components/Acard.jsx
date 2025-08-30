import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Users, GraduationCap } from "lucide-react";

const coreValues = [
  {
    icon: <RefreshCw className="w-10 h-10 text-blue-900" />,
    title: "Sustainable Environment & Infrastructure",
    description:
      "Creative & interactive learning spaces for kids to imagine & explore, fostering innovation in every corner.",
    shadow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
  },
  {
    icon: <Users className="w-10 h-10 text-green-900" />,
    title: "Inclusive Classrooms & Preserved Identity",
    description:
      "Our classrooms embrace diversity & your data is safe with us, ensuring a secure and welcoming space for all.",
    shadow: "hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-purple-900" />,
    title: "Impeccable Education System",
    description:
      "Specially designed curriculums with quality & excellence at their core, empowering future leaders.",
    shadow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]",
  },
];

const CoreValues = () => {
  return (
    <div className="py-16 px-4 sm:px-8 bg-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-700 mb-12 drop-shadow-lg"
      >
        Our Core Values
      </motion.h2>

      {/* Cards wrapper */}
      <div className="overflow-hidden">
        {/* On mobile -> horizontal scroll | On md+ -> grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scrollbar-hide snap-x md:snap-none px-2 sm:px-0">
          {coreValues.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.04 }}
              className={`min-w-[280px] sm:min-w-[320px] md:min-w-0 h-[280px] 
                rounded-2xl p-6 bg-[#f9f9f9] border border-gray-100
                text-center flex flex-col items-center justify-between 
                transition-all duration-500 snap-center md:snap-none ${item.shadow}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 shadow-md mb-4">
                {item.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2 drop-shadow-md">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial heading */}
      <h1 className="text-center font-bold text-blue-900 text-2xl sm:text-3xl mt-14">
        Testimonials
      </h1>
    </div>
  );
};

export default CoreValues;
