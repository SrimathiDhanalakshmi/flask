import im1 from '../assets/images/im1.png';

export default function AboutUs() {
  return (
    <section className="scale-90 transform">
      <div className="grid grid-cols-6 gap-4 px-4 sm:px-6 lg:px-10 py-4">
        {/* Header */}
        <div className="col-span-6 sm:col-start-2 sm:col-span-4 text-center sm:text-left text-2xl Rubik-ExtraBold text-primary"></div>

        {/* Image */}
        <div className="col-span-6 sm:col-start-1 sm:col-span-3 flex justify-center sm:justify-start py-5 px-16">
          <img
            src={im1}
            alt="About Us"
            className="w-full max-w-sm sm:max-w-lg lg:max-w-xl rounded-lg shadow-lg mx-1.5"
          />
        </div>

        {/* Content */}
        <div className="col-span-6 sm:col-start-4 sm:col-span-3 flex flex-col gap-6">
          {/* About Us Section */}
          <div className="shadow-md px-5 py-4 rounded-lg bg-blue-50">
            <h1 className="text-3xl md:text-5xl Source-Code-ExtraBold text-black py-3">
              About Us
            </h1>
            <p className="text-primary text-lg md:text-xl Rubik-Light leading-relaxed">
              Welcome to Aram Eyecare and Opticals – a pioneering optometry clinic dedicated to redefining eyecare for people of all age groups. Founded by Mohamed Thaha Musthafa, Aram is more than just an optical store; it’s a complete eyecare solution designed to address a wide spectrum of vision-related needs. At Aram, we take pride in providing personalized attention to every individual, ensuring the best eye health outcomes. Our expert optometrist consultants specialize in diagnosing and treating conditions like Computer Vision Syndrome (CVS), Myopia, Amblyopia, Presbyopia, and more. We also offer services such as foreign body removal, contact lens care, pre & post-operative counseling, and even early diagnosis of glaucoma through Intra-Ocular Pressure (IOP) measurements. With a mission to empower optometry practices, Aram Eyecare is currently serving thousands of eyes and aims to extend its services to millions, providing advanced care and uplifting the standards of optometry in India.
            </p>
          </div>

          {/* Expanding Our Reach Section */}
          <div className="shadow-md px-5 py-4 rounded-lg bg-violet-50">
            <h1 className="text-3xl md:text-5xl Source-Code-ExtraBold text-black py-3">
              Expanding Our Reach
            </h1>
            <p className="text-primary text-lg md:text-xl Rubik-Light leading-relaxed">
              With three established local stores and a growing reputation for excellence, Aram Eyecare is embarking on a transformative journey to automate its operations and bring its wide range of products to the cloud. Through our e-commerce platform, we aim to deliver high-quality optical products across Tamil Nadu with a fast and reliable delivery approach. At Aram, we are committed to blending traditional expertise with modern technology to make world-class eyecare accessible to all. Join us in our journey of empowering vision, one eye at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
