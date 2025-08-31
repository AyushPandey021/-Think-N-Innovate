import React, { useRef, useState } from "react";

const cardsData = [
  {
    title: "The wait is over",
    description: "Give your project the home it deserves.",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    title: "Branding",
    description: "No configuration needed. We take care of it.",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
  },
  {
    title: "Feedback",
    description: "Collect responses and grow smarter every day.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const FeedbackCards = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4] p-6 md:p-10">
      {/* ✅ Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-900 mb-8">
        Feedback Video Showcase
      </h1>

      {/* ✅ Cards Section with Scroll */}
      <div className="w-full max-w-6xl">
        <div
          className="flex gap-6 overflow-x-auto px-2 pb-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900"
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[340px] mx-auto"
            >
              <FeedbackCard
                title={card.title}
                description={card.description}
                video={card.video}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeedbackCard = ({ title, description, video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="bg-gradient-to-b from-slate-800 to-slate-900 text-white rounded-2xl 
      p-4 sm:p-5 md:p-6 shadow-lg hover:scale-105 hover:shadow-2xl 
      transition-transform duration-300 ease-in-out flex flex-col justify-between w-full"
    >
      {/* Card Heading */}
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mb-4">
          {description}
        </p>
      </div>

      {/* Video Section */}
      <div
        className="relative rounded-xl overflow-hidden cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-xl"
          src={video}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="text-4xl sm:text-5xl">▶</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackCards;