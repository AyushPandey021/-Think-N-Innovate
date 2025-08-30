import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// SmoothBlogCards.jsx
// Added animated background glow effect on hover

const cards = [
  {
    title: "Designing for the Future",
    excerpt:
      "Micro-interactions, thoughtful layouts and motion that guides attention — learn how to craft interfaces people love.",
    img:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0b0a6f9f6c7f7b9f2d3f2c6a2a4f0b9f",
    tag: "UI/UX",
  },
  {
    title: "Modern JavaScript Patterns",
    excerpt:
      "From composable hooks to tiny state machines — adopt patterns that scale while keeping your code friendly.",
    img:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9b4f2f9c3b2f9d2e6f9e7c1b0a3d4e5f",
    tag: "JavaScript",
  },
  {
    title: "Performance-First Web",
    excerpt:
      "Tiny bundles, critical-loading strategies and graceful fallbacks — speed matters for delight and retention.",
    img:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5d6e7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
    tag: "Performance",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function SmoothBlogCards() {
  return (
    <section className="max-w-7xl font-stretch-50% mx-auto px-6 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured articles</h2>
        <p className="mt-2 text-gray-500">Curated reads to sharpen your craft</p>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row gap-6 items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {cards.map((c) => (
          <motion.article
            key={c.title}
            className="relative group bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden w-full lg:w-1/3 grid grid-cols-1 lg:grid-cols-2"
            variants={cardVariants}
            whileHover={{ translateY: -6 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            {/* Background glow animation */}
            <motion.div
              className="absolute inset-0 -z-10 rounded-2xl"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: 1,
                boxShadow: "0 0 25px 8px rgba(99,102,241,0.6)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Image half */}
            <div className="relative col-span-1 h-56 lg:h-auto lg:min-h-full">
              <motion.img
                src={c.img}
                alt={c.title}
                className="object-cover w-full h-full"
                initial={{ scale: 1.03 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                loading="lazy"
                style={{ willChange: "transform" }}
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/28 to-transparent mix-blend-multiply" />
            </div>

            {/* Text/content half */}
            <div className="p-6 col-span-1 flex flex-col justify-between min-h-0">
              <div className="overflow-hidden">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700">
                  {c.tag}
                </span>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {c.title}
                </h3>

                <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed break-words whitespace-normal">
                  {c.excerpt}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-zinc-500">5 min read</div>
                <AnimatedCTA />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

function AnimatedCTA() {
  return (
    <motion.button
      className="relative inline-flex items-center gap-3 rounded-full px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      initial="rest"
      whileTap={{ scale: 0.98 }}
      whileHover="hover"
      aria-label="Read article"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-90 blur-md -z-10"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
        transition={{ duration: 0.35 }}
        style={{ filter: "blur(8px)" }}
      />

      <motion.span
        className="relative z-10 flex items-center gap-2 text-white"
        variants={{ rest: { x: 0 }, hover: { x: 6 } }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        Read
        <ArrowRight size={16} />
      </motion.span>

      <motion.span
        className="absolute left-4 right-4 bottom-1 h-0.5 rounded bg-white/60 z-0"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        initial="rest"
        animate="rest"
        transition={{ duration: 0.35 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.button>
  );
}
