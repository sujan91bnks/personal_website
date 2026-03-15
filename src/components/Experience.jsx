import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      id: 1,
      title: 'Web Developer',
      company: 'Rebecca Everlene Trust Company',
      period: 'Aug 2025 - Present',
      description: 'Designing and developing interactive educational web pages.',
    },
    {
      id: 2,
      title: 'Junior Project Intern',
      company: 'NJ Transit',
      period: 'May 2023 - Dec 2023',
      description: 'Maintained project timelines and coordinated with stakeholders.',
    },
    {
      id: 3,
      title: 'Teaching Assistant',
      company: 'Caldwell University',
      period: 'Aug 2022 - May 2025',
      description: 'Provided academic advising and taught tutorial sessions.',
    },
    {
      id: 4,
      title: 'BS Computer Science',
      company: 'Caldwell University',
      period: 'Aug 2021 - May 2025',
      description: '3.85 GPA • Dean\'s List • AI Research',
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 md:py-32 bg-gray-50"
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
            Experience
          </h2>
          <p className="text-gray-600 text-lg">
            My professional journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-gray-200 hover:border-accent transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 hover:border-accent transition-colors" />
              
              <div className="pb-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-black">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-accent font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience