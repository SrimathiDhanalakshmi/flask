import Header from "../components/Header";
import React from "react";
import pic1 from "../assets/images/pic1.jpg";
import Footer from "../components/Footer";
import im21 from "../assets/images/im21.jpg";

const brands = [
  "Lenses....Zeiss",
  "Essilor",
  "Rodenstock",
  "Vision Rx",
  "Nova",
  "Kodak",
  "Vogue",
  "Tom Ford",
  "Ray-Ban",
  "Carrera",
  "Police",
  "Boss",
  "Mont Blanc",
];

export default function About() {
  return (
    <>
      <Header />
      <div className="scroll-container text-white">
        <div className="scroll-content">
          {/* First set of brand names */}
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="scroll-item text-center text-lg font-semibold p-2"
            >
              {brand}
            </div>
          ))}
          {/* Duplicate set of brand names for seamless scrolling */}
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="scroll-item text-center text-lg font-semibold p-2"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl Rubik-Bold mt-6 text-black AboutUs-heading">
          About Aram Eye Opticals
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          Welcome to Aram Eye Opticals! We offer a wide range of high-quality
          lenses and frames from leading brands to meet your eyewear needs.
        </p>
      </div>
      <div>
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center my-8 px-4">
          <div className="flex-1 mb-4 md:mb-0">
            <img
              src={im21}
              alt="Man writing on glass"
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex-1 px-4">
            <h2 className="text-lg Rubik-light mt-4 text-lightgreen-600">
              Empowering Success
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              Enhance your vision with our Aram Eyecare
            </h3>
            <p className="text-base md:text-lg Rubik-light mt-4 text-gray-600">
              Discover a world of clarity and style at our eye opticals. We
              offer premium eyewear, from trendy frames to advanced lenses,
              tailored to suit your vision needs. Experience expert eye care
              with precision and comfort.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-lg">
                <h2 className="Rubik-Bold">Best Solution</h2>
                <p>
                  Discover the best solution for your needs. Solve your vision
                  challenges, achieve a clear vision from us.
                </p>
              </div>
              <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-lg">
                <h2 className="AboutUs-heading-sub Rubik-Bold">
                  Best Choice Awards
                </h2>
                <p>
                  Recognizing excellence: Explore the best choice awards.
                  Discover top-notch products, services, and brands worth
                  considering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ backgroundColor: "#C4F0B2", padding: "2rem" }}
      >
        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center my-8 px-4">
          <div className="flex-1 px-4 order-2 md:order-1">
            <h2 className="text-lg Rubik-light mt-4 text-lightgreen-600">
              Empowering Success
            </h2>
            <h3 className="text-2xl md:text-4xl Rubik-Bold mt-4 text-green-600">
              Enhance your vision with our Aram Eyecare
            </h3>
            <p className="text-base md:text-lg Rubik-light mt-4 text-gray-600">
              Discover a world of clarity and style at our eye opticals. We
              offer premium eyewear, from trendy frames to advanced lenses,
              tailored to suit your vision needs. Experience expert eye care
              with precision and comfort.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div
                className="flex-1 p-4 rounded-lg"
                style={{
                  background: "#CEF0BF",
                }}
              >
                <h2 className="Rubik-Bold">Best Solution</h2>
                <p>
                  Discover the best solution for your needs. Solve your vision
                  challenges, achieve a clear vision from us.
                </p>
              </div>
              <div className="flex-1 bg-blue-200 p-4 rounded-lg shadow-lg">
                <h2 className="AboutUs-heading-sub Rubik-Bold">
                  Best Choice Awards
                </h2>
                <p>
                  Recognizing excellence: Explore the best choice awards.
                  Discover top-notch products, services, and brands worth
                  considering.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 mb-4 md:mb-0 order-1 md:order-2">
            <img
              src={pic1}
              alt="Man writing on glass"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
