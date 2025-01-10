import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-6 sm:px-12 py-8">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-primary mb-2">Aram Eyecare</h1>
          <p className="text-lg text-gray-600">An Eye care that cares for you...</p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Contact Us */}
          <div>
            <h2 className="text-lg font-bold mb-2">Contact Us</h2>
            <p className="text-primary Rubik-Light">Email: aramprimaryeyecare@gmail.com</p>
            <p className="text-primary Rubik-Light">Phone: +91 9600481947</p>
            <p className="text-primary Rubik-Light">
              Address: 43/9A, Moongilpadi Rd, opposite to sengunthar mini mandabam, Chinnasalem,
              Tamil Nadu 606201
            </p>
          </div>

          {/* Pages */}
          <div>
            <h2 className="text-lg font-bold mb-2">Pages</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-xl url hover:text-primary Rubik-Light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-xl url hover:text-primary Rubik-Light">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-xl url hover:text-primary Rubik-Light">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xl url hover:text-primary Rubik-Light">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <a
                href="https://www.instagram.com/aram_eyewear?igsh=MTllNHdyeWo4b2ozcg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline flex items-center gap-2"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Map Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
          <div className="bg-white shadow-2xl rounded-lg p-4 text-center sm:text-left">
            <h2 className="text-xl Rubik-Bold mb-2">ChinnaSalem Branch</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.8298943145173!2d78.8738497750547!3d11.63546838857041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab6fd97e93702f%3A0xe8a50208a72860fb!2sAram%20primary%20eyecare%20and%20opticals!5e0!3m2!1sen!2sin!4v1736096014076!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location 1"
            ></iframe>
          </div>
          <div className="bg-white shadow-2xl rounded-lg p-4 text-center sm:text-left">
            <h2 className="text-xl Rubik-Bold mb-2">Thuraiyur Branch</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.584932610091!2d78.59032897504726!3d11.1442586890277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babab73bf6710a3%3A0xb98d099cb2d37bd2!2sAram%20eyecare%20and%20opticals!5e0!3m2!1sen!2sin!4v1736095920677!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location 2"
            ></iframe>
          </div>
          <div className="bg-white shadow-2xl rounded-lg p-4 text-center sm:text-left">
            <h2 className="text-xl Rubik-Bold mb-2">Thammampatti Branch</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4852968167033!2d78.4836093750518!3d11.444855988747456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baba3e4111d34ab%3A0x7322464539d89f34!2sAram%20Eye%20Care!5e0!3m2!1sen!2sin!4v1736095758509!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location 3"
            ></iframe>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-gray-500">© 2025 Aram Eyecare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
