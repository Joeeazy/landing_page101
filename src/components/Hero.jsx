import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroimg from "../../public/heo.webp";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Hero() {
  return (
    <div id="hero" className=" min-h-[550px] bg-gradient-to-b from-purple-100 to-white px-8 lg:px-16 pt-24 sm:pt-32 z-4">
      <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-evenly gap-8 sm:gap-0">
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-lg text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Your Journey to <span className="text-purple-600">Mental Wellness</span> Starts Here
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Professional online counseling and mental health support from the comfort of your home.
            Connect with certified therapists and begin your path to well-being.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="services" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>

            {/* Social Media Buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-purple-700 transition-colors"
              >
                <FaFacebookSquare />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-purple-700 transition-colors"
              >
                <FaTwitterSquare />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-purple-700 transition-colors"
              >
                <FaInstagramSquare />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="sm:flex-1 max-w-md sm:block"
        >
          <img
            src={heroimg}
            alt="Hero Image"
            className="rounded-lg shadow-lg max-w-full sm:max-w-sm lg:max-w-md"
          />
        </motion.div>
        
      </div>
    </div>
  );
}
