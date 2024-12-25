import { motion } from "framer-motion";
import user4 from "../../public/user4.jpg";
import user5 from "../../public/user5.jpg";
import user6 from "../../public/user6.jpg";

const testimonials = [
  {
    quote:
      "The counselors truly listened and helped me find clarity in my life. I felt understood and supported every step of the way.",
    author: "Alex M.",
    age: 32,
    image: user4,
  },
  {
    quote:
      "This service transformed my mental health journey. The environment was so welcoming and judgment-free.",
    author: "Sarah T.",
    age: 28,
    image: user6,
  },
  {
    quote:
      "I’ve never felt so comfortable sharing my thoughts and emotions. Highly recommend to anyone seeking genuine support!",
    author: "Daniel R.",
    age: 45,
    image: user5,
  },
  {
    quote:
      "I’ve never felt so comfortable sharing my thoughts and emotions. Highly recommend to anyone seeking genuine support!",
    author: "Daniel R.",
    age: 45,
    image: user5,
  },
  {
    quote:
      "I’ve never felt so comfortable sharing my thoughts and emotions. Highly recommend to anyone seeking genuine support!",
    author: "Daniel R.",
    age: 45,
    image: user5,
  },
  {
    quote:
      "I’ve never felt so comfortable sharing my thoughts and emotions. Highly recommend to anyone seeking genuine support!",
    author: "Daniel R.",
    age: 45,
    image: user5,
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-20 bg-gradient-to-b from-purple-100 to-purple-150">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          What People{" "}
          <span className="bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
            Are Saying
          </span>
        </h2>
        <p className="text-xl text-gray-600">
          Genuine testimonials from our valued clients
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2  bg-gradient-to-r from-purple-500 to-purple-400"
          >
            <p className="text-gray-800 italic mb-4">"{testimonial.quote}"</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="h-12 w-12 rounded-full border border-purple-300 mr-4"
              />
              <div>
                <h6 className="text-lg font-semibold text-gray-900">
                  {testimonial.author}
                </h6>
                <span className="text-sm font-normal text-gray-600">
                  Age {testimonial.age}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

