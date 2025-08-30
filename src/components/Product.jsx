import React from "react";
import { Star } from "lucide-react"; // for rating stars

const courses = [
  {
    id: 1,
    name: "UI/UX Design Fundamentals",
    img: "https://images.unsplash.com/photo-1756408263381-ed1488d9b1ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    rating: 4.5,
    price: "$120",
    eligible: "Beginner Friendly",
  },
  {
    id: 2,
    name: "Fullstack Web Development",
    img: "https://images.unsplash.com/photo-1756456386209-2c83bab17506?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.8,
    price: "$250",
    eligible: "Intermediate",
  },
  {
    id: 3,
    name: "Digital Marketing Essentials",
    img: "https://images.unsplash.com/photo-1756456386209-2c83bab17506?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.3,
    price: "$99",
    eligible: "All Levels",
  },
  {
    id: 4,
    name: "Data Science & Machine Learning",
    img: "https://source.unsplash.com/400x300/?data,ai",
    rating: 4.9,
    price: "$300",
    eligible: "Advanced",
  },
  {
    id: 5,
    name: "Photography Masterclass",
    img: "https://images.unsplash.com/photo-1738081359113-a7a33c509cf9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.6,
    price: "$150",
    eligible: "Beginner Friendly",
  },
  {
    id: 6,
    name: "Business Management",
    img: "https://images.unsplash.com/photo-1756408263381-ed1488d9b1ea?w=600&auto=format&fit=crop&ixlib=rb-4.1.0",
    rating: 4.2,
    price: "$180",
    eligible: "Intermediate",
  },
];

const CourseCards = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Popular <span className="text-indigo-600">Courses</span>
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-lg">
          Choose from our wide range of skill enhancement courses designed to
          boost your career with engaging and practical learning solutions.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden 
            transform transition duration-300 hover:-translate-y-2 flex flex-col"
          >
            {/* Image */}
            <div className="h-40 sm:h-44 w-full overflow-hidden">
              <img
                src={course.img}
                alt={course.name}
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {course.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(course.rating)
                        ? "fill-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 text-xs sm:text-sm text-gray-600">
                  {course.rating} / 5
                </span>
              </div>

              {/* Price + Eligibility */}
              <div className="flex justify-between text-xs sm:text-sm text-gray-700 font-medium mb-4">
                <span className="text-indigo-600">{course.price}</span>
                <span>{course.eligible}</span>
              </div>

              {/* Button */}
              <button
                className="w-full py-3 rounded-lg bg-indigo-600 text-white text-sm sm:text-base font-semibold
                transition duration-300 hover:bg-indigo-700"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
