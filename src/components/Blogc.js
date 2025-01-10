import B1 from '../assets/images/B1.webp';
import { Link } from 'react-router-dom';

export default function BlogK() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-violet-200 p-6">
      <div className="flex flex-col md:flex-row px-4 py-6 md:px-10 md:py-10 gap-6">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            className="w-11/12 h-auto object-cover rounded-lg transform scale-90"
            src={B1}
            alt="Blog"
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2 flex flex-col p-4 text-center md:text-left">
          <h1 className="text-3xl text-black font-bold mb-2">Know About Keratoconus</h1>
          <p className="text-gray-800 mb-1">- Mohamed Thaha Musthafa</p>
          <p className="text-gray-800 mb-4">Founder, Aram Eyecare and Opticals</p>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-center bg-blue-50 rounded-lg p-6 shadow-lg shadow-indigo-500/50">
              <h2 className="text-black text-lg font-semibold mb-4">Keratoconus</h2>
              <p className="text-justify text-gray-600 leading-relaxed text-sm">
                Progressive non-inflammatory bilateral (85%) ectatic condition of the cornea in its axial part.
                This condition is characterized by the thinning and bulging of the cornea into a cone-like shape,
                leading to visual distortion. It is often associated with developmental abnormalities, degenerative changes,
                and may have a hereditary component. Endocrine anomalies have also been linked as potential risk factors.
                Environmental factors such as chronic eye rubbing and poorly managed allergies could accelerate its progression.
                Early detection and management are key to preserving vision.
              </p>
            </div>
            <div className="flex flex-col justify-center bg-blue-50 rounded-lg p-6 shadow-lg shadow-indigo-500/50">
              <h2 className="text-black text-lg font-semibold mb-4">Symptoms</h2>
              <p className="text-justify text-gray-600 leading-relaxed text-sm">
                Defective vision (progressive myopia & irregular astigmatism), image distortion with glare,
                halos around lights, and increased sensitivity to light (photophobia). Patients may also
                experience ocular irritation, persistent itching, and frequent eye strain or fatigue, especially
                after prolonged visual tasks. In advanced stages, vision might deteriorate significantly,
                leading to difficulties in performing everyday activities such as reading or driving. Double
                vision (diplopia) or ghost images may also occur, and in severe cases, corneal scarring may
                further impair vision.
              </p>
            </div>
          </div>

          <div className="py-6 flex justify-center md:justify-start">
            <Link
              to="/blog"
              className="btn text-2xl text-white transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300"
            >
              View Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
