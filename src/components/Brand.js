import React from "react";
import im6 from "../assets/images/im6.png";
import im7 from "../assets/images/im7.png";
import im8 from "../assets/images/im8.png";
import im9 from "../assets/images/im9.jpeg";
import im10 from "../assets/images/im10.jpeg";
import im11 from "../assets/images/im11.png";
import im12 from "../assets/images/im12.png";
import im13 from "../assets/images/im13.png";
import im14 from "../assets/images/im14.jpg";
import im15 from "../assets/images/im15.png";
import im16 from "../assets/images/im16.png";
import im17 from "../assets/images/im17.png";

const brands = [im6, im7, im8, im9, im10, im11, im12, im13, im14, im15, im16, im17];

export default function Brand() {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        {/* First set of logos */}
        {brands.map((brand, index) => (
          <img
            key={`brand-1-${index}`}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="scroll-item"
          />
        ))}
        {/* Duplicate set of logos for seamless scrolling */}
        {brands.map((brand, index) => (
          <img
            key={`brand-2-${index}`}
            src={brand}
            alt={`Brand ${index + 1}`}
            className="scroll-item"
          />
        ))}
      </div>
    </div>
  );
}
