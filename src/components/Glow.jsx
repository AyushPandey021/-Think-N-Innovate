import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaUserGraduate, FaCheckCircle, FaBook } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Design Thinking",
    description:
      "We help students systematically extract, learn, and apply student-centered techniques to solve problems creatively.",
    icon: <FaLightbulb className="w-7 h-7 text-blue-900" />,
    color: "from-white-50 to-blue-100",
  },
  {
    id: 2,
    title: "Qualified Educators",
    description:
      "Our highly qualified educators come with years of both local and international teaching experience, deeply focused on student success.",
    icon: <FaUserGraduate className="w-7 h-7 text-purple-900" />,
    color: "from-white-50 to-purple-100",
  },
  {
    id: 3,
    title: "KHDA Certified",
    description:
      "Whether you're a beginner or expert, we offer a variety of high-quality courses officially approved by KHDA.",
    icon: <FaCheckCircle className="w-7 h-7 text-green-900" />,
    color: "from-white-50 to-green-100",
  },
  {
    id: 4,
    title: "Creative Lessons",
    description:
      "Our curriculum is designed to nurture creativity in every student, promoting critical thinking and real impact on learning.",
    icon: <FaBook className="w-7 h-7 text-pink-900" />,
    color: "from-white-50 to-pink-100",
  },
];

const FeaturesSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12 bg-[#f9f9f9] rounded-2xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
        Our Key Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 40px rgba(128, 0, 128, 0.3)",
 // purple glow
              transition: { duration: 0.3 },
            }}
            className={`bg-gradient-to-br ${feature.color} p-6 rounded-2xl shadow-[8px_8px_20px_rgba(0,0,0,0.1),-8px_-8px_20px_rgba(255,255,255,0.6)] flex flex-col items-center text-center transition-all relative overflow-hidden group`}
          >
            {/* Light glow circle effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-radial from-white/40 via-transparent to-transparent rounded-2xl"></div>

            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white mb-4 shadow-lg group-hover:shadow-2xl transition">
              {feature.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
