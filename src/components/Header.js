import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center px-5 py-4">
        <div className="text-center md:text-left">
          <Link to="/" className="Rubik-Bold text-2xl text-primary block">
            Aram EyeCare
          </Link>
          {/* Slogan below the name */}
        </div>
        <h1 className="animated-slogan text-xl text-gray-700">
            Eye care that cares for you...
          </h1>
        {/* Navigation for desktop */}
        <nav className="hidden md:block">
          <ul className="flex text-primary YsabeauSC text-2xl gap-5">
            <li className="hover:bg-gray-300 rounded px-2 py-1">
              <Link to="/" className="nurl url hover:text-primary">Home</Link>
            </li>
            <li className="hover:bg-gray-300 rounded px-2 py-1">
              <Link to="/products" className="nurl url hover:text-primary">Products</Link>
            </li>
            <li className="hover:bg-gray-300 rounded px-2 py-1">
              <Link to="/blog" className="nurl url hover:text-primary">Blogs</Link>
            </li>
            <li className="hover:bg-gray-300 rounded px-2 py-1">
              <Link to="/about" className="nurl url hover:text-primary">About Us</Link>
            </li>
          </ul>
        </nav>
        {/* Mobile menu toggle */}
        {toggleMenu && (
          <nav className="block md:hidden mobile-nav">
            <ul
              onClick={() => setToggleMenu(!toggleMenu)}
              className="flex flex-col text-primary YsabeauSC text-2xl gap-5"
            >
              <li className="hover:bg-gray-300 rounded px-2 py-1">
                <Link to="/" className="nurl url hover:text-primary">Home</Link>
              </li>
              <li className="hover:bg-gray-300 rounded px-2 py-1">
                <Link to="/products" className="nurl url hover:text-primary">Products</Link>
              </li>
              <li className="hover:bg-gray-300 rounded px-2 py-1">
                <Link to="/blog" className="nurl url hover:text-primary">Blogs</Link>
              </li>
              <li className="hover:bg-gray-300 rounded px-2 py-1">
                <Link to="/about" className="nurl url hover:text-primary">About Us</Link>
              </li>
            </ul>
          </nav>
        )}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="block md:hidden"
        >
          <Bars3Icon className="text-primary h-5" />
        </button>
      </header>
      {/* Horizontal Line */}
      <hr className="border-t-2 border-black" />
    </>
  );
}
