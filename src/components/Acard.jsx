import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, Users, GraduationCap } from "lucide-react";

const coreValues = [
  {
    icon: <RefreshCw className="w-10 h-20 text-blue-500" />,
    title: "Sustainable Environment & Infrastructure",
    description:
      "Creative & interactive learning spaces for kids to imagine & explore, fostering innovation in every corner.",
    shadow: "shadow-[0_0_30px_rgba(59,130,246,0.5)]", // blue glow
  },
  {
    icon: <Users className="w-10 h-10 text-green-500" />,
    title: "Inclusive Classrooms & Preserved Identity",
    description:
      "Our classrooms embrace diversity & your data is safe with us, ensuring a secure and welcoming space for all.",
    shadow: "shadow-[0_0_30px_rgba(34,197,94,0.5)]", // green glow
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-purple-500" />,
    title: "Impeccable Education System",
    description:
      "Specially designed curriculums with quality & excellence at their core, empowering future leaders.",
    shadow: "shadow-[0_0_30px_rgba(168,85,247,0.5)]", // purple glow
  },
];

const CoreValues = () => {
  return (
    <div className="py-16 px-4 sm:px-8  bg-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center text-gray-600 mb-12 drop-shadow-lg"
      >
        Our Core Values
      </motion.h2>

      {/* Horizontal Scrollable Row */}
      <div className="flex gap-6  overflow-x-auto scrollbar-hide px-2 sm:px-0">
        {coreValues.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`min-w-[280px] sm:min-w-[320px] md:min-w-[350px] rounded-2xl p-6 
              backdrop-blur-xl bg-white/10 border border-white/20 
              text-center flex flex-col items-center hover:shadow-2xl 
              transition-all duration-500 ${item.shadow}`}
          >
            {/* Icon */}
            <div className="w-16 h-18 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md mb-4">
              {item.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-600 mb-3 drop-shadow-md">
              {item.title}
            </h3>
            {/* Description */}
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
