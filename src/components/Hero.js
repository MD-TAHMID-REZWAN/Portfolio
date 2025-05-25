'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Typography, Button } from '@mui/material'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black">
      {/* 3D Star Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text drop-shadow-lg">
            MD Tahmid Rezwan
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mt-4 mb-8 font-medium tracking-wide">
            CSE Graduate · Network Specialist · IT Professional
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                paddingX: 4,
                paddingY: 1.5,
                fontWeight: 'bold',
                fontSize: '1rem',
                background: 'linear-gradient(to right, #06b6d4, #3b82f6)',
                boxShadow: '0 4px 20px rgba(0, 204, 255, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(to right, #0ea5e9, #2563eb)',
                  boxShadow: '0 6px 30px rgba(0, 204, 255, 0.4)',
                },
              }}
            >
              Contact Me
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
