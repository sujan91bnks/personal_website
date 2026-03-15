import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            About Me
          </h2>
        </motion.div>

        {/* Image and Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=500&fit=crop"
              alt="Nepal Himalayas"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              Born and raised in Nepal, I grew up surrounded by the majestic Himalayas.
              Just like climbing a mountain requires patience, persistence, and problem-solving,
              I approach every coding challenge with the same mindset.
            </p>

            <p>
              I&apos;m currently a Computer Science student at Caldwell University with a{' '}
              <span className="text-black font-medium">3.85 GPA</span>, graduating in May 2025.
              My passion lies in creating innovative solutions that make a real difference.
            </p>

            <p>
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying the beautiful scenery
              that reminds me of home.
            </p>
          </motion.div>
        </div>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Education</h3>
              <p className="text-black font-medium">BS Computer Science</p>
              <p className="text-gray-600">Caldwell University</p>
              <p className="text-accent font-medium mt-1">3.85 GPA</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Location</h3>
              <p className="text-black font-medium">New Jersey, USA</p>
              <p className="text-gray-600">Originally from Nepal</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Focus</h3>
              <p className="text-black font-medium">Full-Stack Development</p>
              <p className="text-gray-600">AI & Machine Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About