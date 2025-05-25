// components/Experience.jsx
'use client'

import { Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';

import { Work as WorkIcon, School as SchoolIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'General Manager',
    company: 'HoneyComb Inc.',
    period: '2024 - Present',
    description: 'Conduct interviews, monitor task execution, build relationships with partners and investors, oversee financial statements.',
    icon: <WorkIcon color="primary" />
  },
  {
    title: 'BSc in CSE',
    company: 'American International University of Bangladesh',
    period: '2020 - 2024',
    description: 'Graduated with CGPA: 3.61/4.00',
    icon: <SchoolIcon color="secondary" />
  },
  {
    title: 'HSC (Science)',
    company: 'Adamjee Cantonment Public College',
    period: '2020',
    description: 'Graduated with CGPA: 5.00/5.00',
    icon: <SchoolIcon color="secondary" />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <Typography variant="h3" component="h2" className="text-3xl font-bold text-center mb-12">
          Experience & Education
        </Typography>
        
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color={index % 2 === 0 ? 'primary' : 'secondary'}>
                    {exp.icon}
                  </TimelineDot>
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="h3" className="font-semibold">
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {exp.company} | {exp.period}
                  </Typography>
                  <Typography variant="body1" className="mt-2">
                    {exp.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;