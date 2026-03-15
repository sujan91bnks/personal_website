import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'TailwindCSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Java', 'REST APIs', 'WebSocket'],
    },
    {
      title: 'AI & ML',
      skills: ['PyTorch', 'TensorFlow', 'Computer Vision', 'Neural Networks'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Figma', 'VS Code', 'Linux', 'Docker'],
    },
  ]

  return (
    <section
      id="skills"
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
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4">
            Skills
          </h2>
          <p className="text-gray-600 text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-black mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm hover:bg-accent hover:text-black transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills