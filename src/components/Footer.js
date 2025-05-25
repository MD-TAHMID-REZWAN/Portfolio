// components/Footer.jsx
'use client'
import { Typography, IconButton, Link as MuiLink } from '@mui/material'
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <IconButton 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <GitHub />
          </IconButton>
          <IconButton 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <LinkedIn />
          </IconButton>
          <IconButton 
            href="https://twitter.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <Twitter />
          </IconButton>
          <IconButton 
            href="mailto:tahmidnishad@gmail.com" 
            className="text-white hover:text-blue-400"
          >
            <Email />
          </IconButton>
        </div>
        
        <Typography variant="body2" className="mb-2">
          © {new Date().getFullYear()} MD Tahmid Rezwan. All rights reserved.
        </Typography>
        
        <Typography variant="body2">
          Built with Next.js, React, and Material UI
        </Typography>
      </div>
    </footer>
  )
}

export default Footer