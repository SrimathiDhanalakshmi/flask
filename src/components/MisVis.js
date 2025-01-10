 // Ensure the CSS file is imported

export default function MisVis() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {/* Parent Container for Row Layout */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Mission Box */}
        <div className="w-full md:w-1/2 flex flex-col items-start px-5 md:px-10 py-5 bg-green-50 shadow-lg shadow-cyan-500/50 rounded-lg border-gray-200 animate-slide-left">
          <h1 className="text-4xl Rubik-Bold text-primary mb-4">Our Mission</h1>
          <p className="text-justify text-xl YsabeauSC">
          At Aram, we are committed to providing comprehensive eye care for individuals of all ages.
          Our mission is to ensure optimal eye health through expert consultations, advanced diagnostics,
          and tailored treatments. We specialize in addressing a wide range of eye conditions, from Computer Vision Syndrome (CVS)
          and Myopia to Amblyopia, Presbyopia, and early-stage glaucoma detection. Our services also include contact lens fitting,
          pre- and post-operative counseling, foreign body removal, and retinal condition diagnosis.
          
          We believe in not just selling eyewear, but in treating and preventing eye-related issues with precision and care.
          By empowering optometrists and embracing innovative technologies, Aram aims to reach millions of people and improve their vision
          for a healthier, brighter future.
          </p>
        </div>

        {/* Vision Box */}
        <div className="w-full md:w-1/2 flex flex-col items-start px-5 md:px-10 py-5 bg-green-50 shadow-lg shadow-cyan-500/50 rounded-lg border-gray-200 animate-slide-left">
          <h1 className="text-4xl Rubik-Bold text-primary mb-4">Our Vision</h1>
          <p className="text-justify text-xl YsabeauSC">
          Aram Eyecare is dedicated to becoming a leading, inspirational optometry clinic that embodies excellence in eye health.
          Our vision is to offer a complete spectrum of optometry services, encompassing all aspects of ophthalmology—from accurate
          diagnosis to personalized therapeutic guidance and treatment. We aim to provide exceptional care for common conditions like myopia,
          hyperopia, presbyopia, and beyond, while also excelling in eyewear dispensing and vision correction solutions.
          
          We are committed to educating and empowering optometrists, fostering a recognized and regulated practice within India.
          Through innovation, care, and expertise, we strive to illuminate the path towards a brighter, clearer future for all,
          enriching the lives of millions by enhancing their vision.<br />
            <span> </span>
            <span className="block pb-3 Rubik-Bold">-Mohamed Thaha Musthafa</span>
            <span className="block pb-3">Founder of Aram Eyecare and Opticals</span>
          </p>
        </div>
      </div>
    </div>
  );
}
