import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {

  return (
    <AnimatePresence>
      <div className="relative">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>
          <Services />
          <Contact />
        </main>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-900 text-white py-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} MindfulCare. All rights reserved.</p>
        </motion.footer>
      </div>
    </AnimatePresence>
  )
}

export default App
