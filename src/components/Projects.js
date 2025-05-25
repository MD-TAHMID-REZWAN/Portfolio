// components/Projects.jsx
'use client'
import { Typography, Card, CardContent, CardActions, Button, Chip } from '@mui/material'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Kidney Disease Biomarker Ontology (KDBO)',
    description: 'Developed an innovative method to identify kidney disease biomarkers using machine learning, network analysis, and statistical methods.',
    technologies: ['Ontology', 'Machine Learning', 'Python', 'Research'],
    year: '2023-2024'
  },
  {
    title: 'Lab PC Management System',
    description: 'Created a console-based Python application to maintain records of PCs in a lab environment.',
    technologies: ['Python', 'Console Application', 'File Handling'],
    year: '2023'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Typography variant="h3" component="h2" className="text-3xl font-bold text-center mb-12">
          Projects & Research
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow">
                  <Typography variant="h5" component="h3" className="font-semibold mb-2">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" className="mb-3">
                    {project.year}
                  </Typography>
                  <Typography variant="body1" className="mb-4">
                    {project.description}
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                  </div>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects