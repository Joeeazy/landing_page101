import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroimg from "../../public/heo.webp"
export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-b from-purple-50 to-white px-8 lg:px-16">
     {/* Left side - Image */}
      <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex-auto max-w-2xl text-left ml-10"
  >
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
      Your Journey to <span className="text-purple-600">Mental Wellness</span> Starts Here
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Professional online counseling and mental health support from the comfort of your home. 
      Connect with certified therapists and begin your path to well-being.
    </p>
    <Link to="services" smooth={true} duration={500}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors"
      >
        Start Your Journey
      </motion.button>
    </Link>
      </motion.div>

    {/* Right side - Text */}
      <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="flex-1 max-w-2xl"
  >
    <img src={heroimg} alt="hero image" className="rounded-lg shadow-lg" />
      </motion.div>
</div>
  );
}