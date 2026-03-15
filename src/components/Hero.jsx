import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import hill from './hill.png'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-20"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Small tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-500 text-sm mb-4 tracking-wider uppercase"
        >
          From the Himalayas
        </motion.p>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-black mb-6 tracking-tight"
        >
          Sujan Thapa
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-8 font-normal"
        >
          Computer Science Student & Developer
        </motion.h2>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <img 
            src={hill}
            alt="Himalayan Mountains"
            className="w-70 h-44 object-cover rounded-lg mx-auto shadow-lg"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 bg-black text-white rounded font-medium hover:bg-accent hover:text-black transition-all duration-300"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 border-2 border-black text-black rounded font-medium hover:bg-accent hover:border-accent transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-black transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
