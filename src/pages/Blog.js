import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const blogPosts = [
  {
    title: "JYJYDDHHTR",
    date: "Friday, April 8, 2022",
    image: "https://via.placeholder.com/600x400", // Replace with your image URL
    link: "/web-design-career", // Internal navigation link
  },
  {
    title: "JYJYDDHHTR",
    date: "Monday, February 28, 2022",
    image: "https://via.placeholder.com/600x400", // Replace with your image URL
    link: "/designers-future", // Internal navigation link
  },
  {
    title: "JYJYDDHHTR",
    date: "Sunday, February 6, 2022",
    image: "https://via.placeholder.com/600x400", // Replace with your image URL
    link: "/navigation-component", // Internal navigation link
  },
];

export default function Blog() {
  return (
    <>
      <Header />

      {/* Brands Scrolling Section */}
      <div className="scroll-container text-white">
        <div className="scroll-content">
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="scroll-item text-center text-lg font-semibold p-2"
            >
              {brand}
            </div>
          ))}
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

      {/* Blog Posts Section */}
      <h1 className="text-4xl Rubik-Medium mt-6 text-dark-600 AboutUs-heading text-center py-5 font-bold">
        Blog
      </h1>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{post.date}</p>
                <Link
                  to={post.link}
                  className="inline-flex items-center justify-center w-full py-2 px-4 border border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition duration-300"
                >
                  Continue Reading
                  <span className="ml-2 text-xl">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
