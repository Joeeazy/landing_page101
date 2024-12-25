import { motion } from 'framer-motion'
import React from 'react'
import aboutimg from "../../public/group.webp"
export default function About() {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutimg} className="rounded-lg shadow-lg max-w-xl" alt="support group image" />
          </div>
          <div className="md:w-3/5 mx-auto ">
            <h2 className="text-5xl mb-4 md:w-4/5 text-purple-800 font-bold">
              Our Story
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8 tracking-wide">
            Mindescape is more than just a mental health service; it's a nurturing community focused on empowering young adults to enhance their mental well-being. With our commitment to utilizing cutting-edge virtual reality tools, personalized support from qualified professionals, and a welcoming environment, our goal is to help you navigate your mental health journey and achieve your aspirations. Whether you're seeking guidance for the first time or looking to deepen your understanding, we invite you to join us in fostering a healthier, happier mindset.
            </p>
            <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors"
      >
        Start Your Journey
      </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
