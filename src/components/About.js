// components/About.jsx
'use client'
import { Typography, Avatar, Grid } from '@mui/material'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <Typography variant="h3" component="h2" className="text-3xl font-bold text-center mb-12">
        About Me
      </Typography>
      
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={4} className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Avatar 
              alt="MD Tahmid Rezwan" 
              src="/images/profile.jpg" 
              className="w-64 h-64 border-4 border-blue-500"
            />
          </motion.div>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Typography variant="body1" className="text-lg mb-4">
            I'm a responsible, mature, and hardworking Computer Science and Engineering graduate with strong IT skills. 
            Confident and diligent, I thrive in high-pressure environments and enjoy taking on challenges.
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <Typography variant="h6" className="font-semibold">Name:</Typography>
              <Typography>MD Tahmid Rezwan</Typography>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold">Email:</Typography>
              <Typography>tahmidnishad@gmail.com</Typography>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold">Phone:</Typography>
              <Typography>+8801742319598</Typography>
            </div>
            <div>
              <Typography variant="h6" className="font-semibold">Address:</Typography>
              <Typography>Dhaka Cantonment, Dhaka, Bangladesh</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  )
}

export default About