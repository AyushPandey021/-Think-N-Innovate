import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Gallery = () => {
  const swiperRef = useRef(null);

  const artworks = [
    {
      img: "https://picsum.photos/id/1016/600/400",
      price: "$270",
      title: "Flames of Passion",
      author: "Alex Bilyk",
      desc: "This piece represents the fire of inspiration burning within us all.",
    },
    {
      img: "https://picsum.photos/id/1015/600/400",
      price: "$310",
      title: "Oceans of Serenity",
      author: "Lana Ray",
      desc: "Immerse yourself in calm and soothing harmony.",
    },
    {
      img: "https://picsum.photos/id/1025/600/400",
      price: "$450",
      title: "Mystic Horizons",
      author: "James Lee",
      desc: "A breathtaking view blending vibrant skies and surreal landscapes.",
    },
    {
      img: "https://picsum.photos/id/1033/600/400",
      price: "$390",
      title: "Whispers of Nature",
      author: "Sophie Miller",
      desc: "A soft reminder of the bond between humans and nature.",
    },
    {
      img: "https://picsum.photos/id/1040/600/400",
      price: "$520",
      title: "Eternal Bloom",
      author: "David Chen",
      desc: "Symbolizing everlasting beauty in delicate blossoms.",
    },
  ];

  return (
    <section className="bg-[#d8deee]  text-white py-17 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-[#1E40AF] md:text-5xl font-bold text-center mb-12">
        Our Vibrant Gallery
        </h2>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true} // ✅ infinite
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"} // ✅ best for coverflow look
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {artworks.map((art, i) => (
            <SwiperSlide
              key={i}
              className="max-w-sm rounded-2xl overflow-hidden bg-[#111] shadow-lg"
            >
              <img
                src={art.img}
                alt={art.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-indigo-400">
                    {art.price}
                  </span>
                  <span className="text-sm text-gray-400">{art.author}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{art.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{art.desc}</p>
                <button className="text-indigo-400 hover:underline flex items-center gap-1">
                  View more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Nav Buttons */}
        <button
          onClick={() => {
            swiperRef.current?.slidePrev();
            swiperRef.current?.autoplay.start(); // keep autoplay alive
          }}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => {
            swiperRef.current?.slideNext();
            swiperRef.current?.autoplay.start();
          }}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
