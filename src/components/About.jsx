import { motion } from "framer-motion";
import React from "react";
import aboutimg from "../../public/about.webp";

export default function About() {
  return (
    <div id="about" className="bg-gradient-to-b from-white to-purple-50 px-8 lg:px-16 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-evenly gap-8 sm:gap-12">
        
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="sm:flex-1 max-w-md"
        >
          <img
            src={aboutimg}
            className="rounded-lg shadow-lg max-w-full sm:max-w-sm lg:max-w-md"
            alt="Support group"
          />
        </motion.div>
        

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-lg text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-purple-800 mb-4 leading-tight">
            Our Story
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Mindescape is more than just a mental health service; it's a nurturing community focused on empowering young adults to enhance their mental well-being. With our commitment to utilizing cutting-edge virtual reality tools, personalized support from qualified professionals, and a welcoming environment, our goal is to help you navigate your mental health journey and achieve your aspirations. Whether you're seeking guidance for the first time or looking to deepen your understanding, we invite you to join us in fostering a healthier, happier mindset.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
        
      </div>
    </div>
  );
}


