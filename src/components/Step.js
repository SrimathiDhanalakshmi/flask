import p1 from "../assets/images/number-1.png";
import p2 from "../assets/images/number-2.png";
import p3 from "../assets/images/number-3.png";
import p4 from "../assets/images/number-4.png";
import p5 from "../assets/images/number-5.png";
import p6 from "../assets/images/number-6.png";

import React, { useEffect, useState } from "react";

export default function Steps() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".stage");
      let currentStage = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentStage = index;
        }
      });

      setActiveStage(currentStage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stages = [
    { id: 1, description: "know us", image: p1 },
    { id: 2, description: "contact us", image: p2 },
    { id: 3, description: "describe your queries", image: p3 },
    { id: 4, description: "book an appointment or know your products", image: p4 },
    { id: 5, description: "conform your purchase", image: p5 },
    { id: 6, description: "review us for the future growth", image: p6 },
  ];

  return (
    <div className="bg-primary">
      {/* Title */}
      <h1 className="Rubik-Bold text-gray-300 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent text-center text-4xl py-10">
        Six Steps to a Hassle-Free Experience
      </h1>

      <div className="relative flex flex-col items-center py-10 bg-primary sm:items-start sm:px-5">
        {/* Vertical Line */}
        <div className="absolute h-full top-0 w-[5px] bg-gray-400 sm:left-1/2 sm:-translate-x-1/2 right-5 sm:right-auto">
          <div
            className="bg-gradient-to-b from-green-400 to-blue-400"
            style={{
              height: `${(activeStage / (stages.length - 1)) * 100}%`,
              transition: "height 0.3s ease",
            }}
          ></div>
        </div>

        {/* Stages */}
        <div className="flex flex-col gap-16 w-full max-w-5xl px-5">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className="stage flex flex-col sm:flex-row items-center relative gap-4 sm:gap-6 sm:px-5"
            >
              {/* Image */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStage === index
                    ? "bg-gradient-to-r from-green-400 to-blue-400"
                    : "bg-gray-300"
                }`}
              >
                <img
                  src={stage.image}
                  alt={`Step ${stage.id}`}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Description */}
              <div
                className={`text-left w-full ${
                  activeStage === index ? "text-blue-500" : "text-black"
                } sm:text-left sm:w-auto sm:flex-1`}
              >
                <p className="text-xl Rubik-Light">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
