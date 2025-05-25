// components/Navbar.jsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, useScrollTrigger } from '@mui/material'
import { Menu as MenuIcon, Brightness4, Brightness7 } from '@mui/icons-material'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  })
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => {
    setAnchorEl(null)
  }
  
  if (!mounted) return null
  
  return (
    <AppBar 
      position="fixed" 
      className={`transition-all duration-300 ${trigger ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent shadow-none'}`}
      elevation={0}
    >
      <Toolbar className="max-w-7xl mx-auto w-full">
        <Typography variant="h6" component="div" className="flex-grow">
          <Link href="/" passHref>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer font-bold"
            >
              Tahmid Rezwan
            </motion.div>
          </Link>
        </Typography>
        
        <div className="hidden md:flex space-x-4">
          <Link href="#about" passHref>
            <Button color="inherit">About</Button>
          </Link>
          <Link href="#skills" passHref>
            <Button color="inherit">Skills</Button>
          </Link>
          <Link href="#experience" passHref>
            <Button color="inherit">Experience</Button>
          </Link>
          <Link href="#projects" passHref>
            <Button color="inherit">Projects</Button>
          </Link>
          <Link href="#contact" passHref>
            <Button color="inherit">Contact</Button>
          </Link>
          
          <IconButton 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            color="inherit"
          >
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </div>
        
        <div className="md:hidden">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link href="#about">About</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#skills">Skills</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#experience">Experience</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#projects">Projects</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="#contact">Contact</Link>
            </MenuItem>
            <MenuItem onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              Toggle Theme
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar