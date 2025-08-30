import React, { useRef, useState } from "react";

const cardsData = [
  {
    title: "The wait is over",
    description: "Give your project the home it deserves.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    title: "Branding",
    description: "No configuration needed. We take care of it.",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
  },
  {
    title: "Feedback",
    description: "Collect responses and grow smarter every day.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const FeedbackCards = () => {
  return (
    <div className="p-8">
      {/* ✅ Main Heading on Top */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Feedback Video Showcase
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <FeedbackCard
            key={index}
            title={card.title}
            description={card.description}
            video={card.video}
          />
        ))}
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
      className="bg-gradient-to-b from-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-lg 
      hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between"
    >
      {/* Card Heading */}
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-slate-300 mb-4">{description}</p>
      </div>

      {/* Video */}
      <div
        className="relative rounded-xl overflow-hidden cursor-pointer"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          className="w-full h-64 object-cover rounded-xl"
          src={video}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="text-5xl">▶</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackCards;
