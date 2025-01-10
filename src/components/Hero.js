import { useState, useEffect } from 'react';
import im1 from '../assets/images/im1.png';
import im2 from '../assets/images/im2.png';
import im20 from '../assets/images/im20.png';
import w1 from '../assets/images/w1.jpg'
import { Link } from 'react-router-dom';
 // Add more images if needed

export default function Hero() {
  const images = [im1, im2, im20]; // Array of images
  const [currentImage, setCurrentImage] = useState(0); // State to track current image index

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); // Cycle through images
    }, 3000); // 3 seconds interval

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=' bg-gradient-to-r from-blue-200 to-violet-200 p-6 flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
      {/* Left Half Content */}
      <div className="w-full md:w-1/3 px-5 py-7 flex flex-col slide-left">
        <h1 className="text-5xl text-gray-500 Rubik-ExtraBold">Hello <span className="text-black">,</span></h1>
        <h1 className="text-5xl text-gray-500 Rubik-Bold">
          Welcome to <br />
          <span className="text-black text-6xl">Aram EyeCare </span>!!! 
        </h1>
        <p className="text-primary text-4xl dancing unl animated-slogan">
          Your vision our care...
        </p>
        <div className="py-10 gap-5">
            <Link to='/products' className='btn text-2xl text-white transition ease-in-out delay-150 bg-purple-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>View Products</Link>
        </div>
      </div>

      {/* Right Half Carousel */}
      <div className="w-full md:w-1/2 flex justify-center items-center top-3">
        <img
          className="md:w-3/4 rounded-lg"
          src={images[currentImage]} // Display the current image based on state
          alt="Aram EyeCare"
        />
      </div>
    </section>
  );
}
