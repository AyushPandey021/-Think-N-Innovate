import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Mastering React in 2025",
    description: "Learn the latest features of React and build stunning UIs.",
    img: "https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3N8ZW58MHx8MHx8fDA%3D",
    rating: 4,
  },
  {
    id: 2,
    title: "Next.js for Beginners",
    description: "Step-by-step guide to build SEO-friendly websites with Next.js.",
    img: "https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3N8ZW58MHx8MHx8fDA%3D",
    rating: 5,
  },
  {
    id: 3,
    title: "Tailwind CSS Tips",
    description: "Design beautiful and responsive layouts quickly with Tailwind CSS.",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2dzfGVufDB8fDB8fHww",
    rating: 4,
  },
  {
    id: 4,
    title: "Framer Motion Animations",
    description: "Make your React apps come alive with smooth animations.",
    img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2d8ZW58MHx8MHx8fDA%3D",
    rating: 5,
  },
];

const BlogCard = () => {
  return (
    <div className="w-screen  mx-auto bg-white px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Latest  <span className="text-indigo-600">Blogs</span></h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto">
          Stay updated with our latest articles, tips, and tutorials to improve your skills and knowledge.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-all"
          >
            {/* Image */}
            <img
              src={post.img}
              alt={post.title}
              className="h-48 sm:h-52 md:h-56 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1 mb-4">{post.description}</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < post.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Button */}
              <button className="bg-blue-600 text-white py-2 px-3 sm:py-2 sm:px-4 rounded-lg hover:bg-blue-700 transition-all text-sm sm:text-base">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
