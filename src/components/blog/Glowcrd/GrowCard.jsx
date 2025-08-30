import React, { useEffect, useState } from "react";
import "./Growcard.css"; // css you shared

// custom hook for glow effect
const usePointerGlow = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);

      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--xp", xp);
      document.documentElement.style.setProperty("--y", y);
      document.documentElement.style.setProperty("--yp", yp);

      setStatus({ x, y, xp, yp });
    };

    document.body.addEventListener("pointermove", syncPointer);
    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  return [status];
};

const GlowCard = () => {
  usePointerGlow();

  const cardData = [
    {
      icon: "💡",
      title: "Design Thinking",
      text: "We help students systematically extract, learn, and apply student-centered techniques to solve problems in a creative and innovative way.",
    },
    {
      icon: "👨‍🏫",
      title: "Qualified Educators",
      text: "Our highly qualified educators come with years of both local and international teaching experience, deeply focused on student success.",
    },
    {
      icon: "✅",
      title: "KHDA Certified",
      text: "Whether you're a beginner or expert, we offer a variety of high-quality courses officially approved by KHDA.",
    },
    {
      icon: "📖",
      title: "Creative Lessons",
      text: "Our curriculum nurtures creativity in every student, promoting critical thinking and real impact on learning.",
    },
  ];

  return (
    <main>
      {cardData.map((card, index) => (
        <article data-glow key={index}>
          <span data-glow />
          <div className="card-content">
            <div className="icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </article>
      ))}
    </main>
  );
};

export default GlowCard;
