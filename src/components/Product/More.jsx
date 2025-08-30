import React from "react";
import ChromaGrid from "./ChromaGrid";

function More() {
  const bgStyle = {
    background: "#e0e5fcff",
    backgroundImage: `
      radial-gradient(
        circle at 20% 100%,
        rgba(184, 184, 184, 0.1) 0%,
        rgba(184, 184, 184, 0.1) 33%,
        rgba(96, 96, 96, 0.1) 33%,
        rgba(96, 96, 96, 0.1) 66%,
        rgba(7, 7, 7, 0.1) 66%,
        rgba(7, 7, 7, 0.1) 99%
      ),
      linear-gradient(40deg, #040a22, #9ca0b0ff, #d1d8f0ff, #6f7aa6)
    `,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh", // fix: use minHeight not maxheight
    width: "100%",
  };

  return (
    <div style={bgStyle} className="flex flex-col items-center justify-center py-12 px-6">

      {/* Heading Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl  md:text-5xl font-bold text-red-900 mb-4">
          Our Products
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Choose from our wide range of skill enhancement courses that encourage
          design thinking, complex problem-solving, cognitive flexibility, critical
          thinking, and decision-making skills through engaging learning solutions.
        </p>
      </div>

      {/* Grid Section */}
      <div className="mt-12 min-h-screen bg-white gap-10 flex items-center justify-center p-8 rounded-2xl shadow-lg">
        <ChromaGrid columns={3} rows={2} radius={300} />
      </div>

    </div>
  );
}

export default More;
