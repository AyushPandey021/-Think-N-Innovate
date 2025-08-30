import React, { useEffect, useRef } from "react";
import "./Testomonal.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: `Awesome job you did there @lambdatesting with the LT Browser. It's doing a fantastic job at responsive testing 🔥 see more >`,
    img: "https://user-images.githubusercontent.com/78242022/272654602-6b6c4303-587d-48ae-957a-3b88496f1fcc.png",
    name: "Mbaziira Ronald",
    role: "Developer",
  },
  {
    text: `Amazing Test software. I am very satisfied, I think it is excellent software and as the years go by it continues to offer the best service I have ever tried....see more >`,
    img: "https://user-images.githubusercontent.com/78242022/272654585-d0774fd3-5d90-42f0-bc53-7141f7735825.png",
    name: "Elias M.",
    role: "QA Engineer",
  },
  {
    text: `Anyone who needs to test their code on different platforms try @lambdatesting Great service from this company!`,
    img: "https://user-images.githubusercontent.com/78242022/266013776-40ac50f1-31f8-4250-acb2-05f16d683baa.png",
    name: "Stephan Smuts",
    role: "Freelancer",
  },
  {
    text: `See how @lambdatesting is #Futureready to enable blazing-fast test orchestration seamlessly integrated with organizations' existing CI/CD platforms, using #Microsoft Azure.`,
    img: "https://user-images.githubusercontent.com/78242022/272654608-d291d9df-439c-4a79-83b1-2f2d71cd25b5.png",
    name: "Microsoft India",
    role: "Partner",
  },
];

export default function TestimonialSlider() {
  const logosRef = useRef(null);

  useEffect(() => {
    const logosSlide = logosRef.current.querySelector(".logos-slide");
    const clone = logosSlide.cloneNode(true);
    logosRef.current.appendChild(clone);
  }, []);

  return (
    <div className="testimonial-wrapper">
      {/* Heading */}
      {/* <h1 className="testimonial-heading">✨ Testimonials ✨</h1> */}

      {/* Scrolling Slider */}
      <div className="logos" ref={logosRef}>
        <div className="logos-slide">
          {testimonials.map((t, idx) => (
            <section
              key={idx}
              className={`card ${idx % 2 === 0 ? "left" : "right"}`}
            >
              {/* Header */}
              <div className="header">
                <img src={t.img} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="stars">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
              </div>

              {/* Review */}
              <p className="review">"{t.text}"</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
