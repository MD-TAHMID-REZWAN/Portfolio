// components/Skills.jsx
'use client'
import { Typography, Card, CardContent, Chip } from '@mui/material'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Network Architecture', level: 90 },
  { name: 'Cybersecurity', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'Machine Learning', level: 75 },
  { name: 'Team Management', level: 90 },
  { name: 'IT Troubleshooting', level: 85 },
  { name: 'Microsoft Office', level: 95 },
  { name: 'Ontology Development', level: 70 },
]

const certifications = [
  'Cisco IT Essentials (2020)',
  'Cisco Certified CyberOps Associate (2023)',
  'Cisco Certified Network Associate (CCNA) (2023)',
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Typography variant="h3" component="h2" className="text-3xl font-bold text-center mb-12">
          Skills & Certifications
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Typography variant="h5" className="text-xl font-semibold mb-6">
              Technical Skills
            </Typography>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-2">
                    <Typography>{skill.name}</Typography>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <Typography variant="h5" className="text-xl font-semibold mb-6">
              Certifications
            </Typography>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent>
                      <Typography>{cert}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <Typography variant="h5" className="text-xl font-semibold mt-8 mb-4">
              Languages
            </Typography>
            <div className="flex flex-wrap gap-2">
              <Chip label="Bengali (Native)" color="primary" />
              <Chip label="English (Fluent)" color="secondary" />
              <Chip label="Hindi (Fluent)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills