import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Testimonials from './components/Testimonials';


function App() {

  return (
    <AnimatePresence>
      <div className="relativ">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-purple-950 to-purple-600 text-white py-8 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Mindescape. All rights reserved.</p>
        </motion.footer>
      </div>
    </AnimatePresence>
  )
}

export default App
