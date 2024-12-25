import { motion } from 'framer-motion';
import { FaVideo, FaUserMd, FaHeart, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: <FaVideo className="text-5xl mb-4 text-purple-600" />,
    title: "Individual therapy",
    description: "Personalized sessions with licensed therapists.",
  },
  {
    icon: <FaUserMd className="text-5xl mb-4 text-purple-600" />,
    title: "Group therapy",
    description: "Supportive sessions led by experienced facilitators.",
  },
  {
    icon: <FaHeart className="text-5xl mb-4 text-purple-600" />,
    title: "Virtual reality therapy",
    description: "Immersive experiences designed to promote healing.",
  },
  {
    icon: <FaUsers className="text-5xl mb-4 text-purple-600" />,
    title: "Workshops",
    description: "Insights on various mental health topics and strategies.",
  },
  {
    icon: <FaUsers className="text-5xl mb-4 text-purple-600" />,
    title: "Wellness programs",
    description: "Holistic support for emotional and psychological well-being.",
  },
  {
    icon: <FaUsers className="text-5xl mb-4 text-purple-600" />,
    title: "Online consultations",
    description: "Remote sessions and support available anytime.",
  },
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <p className="text-xl text-gray-600">
            Comprehensive mental health support tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-2 hover:bg-purple-100 hover:scale-105"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 10 }}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
