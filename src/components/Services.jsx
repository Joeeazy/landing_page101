import { motion } from 'framer-motion';
import { FaVideo, FaUserMd, FaHeart, FaUsers } from 'react-icons/fa';

const services = [
  {
    icon: <FaVideo className="text-4xl mb-4 text-purple-600" />,
    title: "Virtual Counseling",
    description: "One-on-one video sessions with licensed therapists from anywhere."
  },
  {
    icon: <FaUserMd className="text-4xl mb-4 text-purple-600" />,
    title: "Psychiatric Referrals",
    description: "Direct connections to certified psychiatrists when needed."
  },
  {
    icon: <FaHeart className="text-4xl mb-4 text-purple-600" />,
    title: "Mental Wellness Coaching",
    description: "Personalized strategies for maintaining mental health and well-being."
  },
  {
    icon: <FaUsers className="text-4xl mb-4 text-purple-600" />,
    title: "Support Groups",
    description: "Virtual group sessions for shared experiences and mutual support."
  }
];

export default function Services() {
  return (
    <div id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive mental health support tailored to your needs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-purple-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}