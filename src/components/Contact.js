'use client'
import {
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  Divider,
} from '@mui/material'
import { motion } from 'framer-motion'
import { Send as SendIcon } from '@mui/icons-material'
import toast, { Toaster } from 'react-hot-toast'

const fadeIn = (direction = 'left', delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : 50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  }
}

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Message sent successfully!', {
      style: {
        borderRadius: '8px',
        background: '#333',
        color: '#fff',
      },
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white to-slate-100">
      <div className="container mx-auto px-4 relative z-10">
        <Typography
          variant="h3"
          component="h2"
          className="text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </Typography>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeIn('left')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Paper
                elevation={6}
                className="rounded-2xl bg-white/60 backdrop-blur-md p-6 shadow-lg"
              >
                <Typography variant="h5" className="text-xl font-semibold mb-4">
                  Contact Information
                </Typography>
                <Divider className="mb-4" />

                <div className="space-y-3">
                  <div>
                    <Typography variant="subtitle1" className="font-medium">
                      Email:
                    </Typography>
                    <Typography>tahmidnishad@gmail.com</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle1" className="font-medium">
                      Phone:
                    </Typography>
                    <Typography>+8801742319598</Typography>
                  </div>
                  <div>
                    <Typography variant="subtitle1" className="font-medium">
                      Address:
                    </Typography>
                    <Typography>Dhaka Cantonment, Dhaka, Bangladesh</Typography>
                  </div>
                </div>

                <Typography
                  variant="h5"
                  className="text-xl font-semibold mt-8 mb-4"
                >
                  Reference
                </Typography>
                <Divider className="mb-4" />
                <div>
                  <Typography variant="subtitle1" className="font-medium">
                    Ashiq Ahmed
                  </Typography>
                  <Typography>CEO, HoneyComb Inc.</Typography>
                  <Typography>Phone: 01720087583</Typography>
                  <Typography>Email: ashiqahmed0171@gmail.com</Typography>
                </div>
              </Paper>
            </motion.div>
          </Grid>

          {/* Form Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={fadeIn('right')}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Paper
                elevation={6}
                className="rounded-2xl bg-white/60 backdrop-blur-md p-6 shadow-lg"
              >
                <Box component="form" onSubmit={handleSubmit} className="space-y-4">
                  <TextField fullWidth label="Your Name" variant="outlined" required />
                  <TextField fullWidth label="Your Email" variant="outlined" type="email" required />
                  <TextField fullWidth label="Subject" variant="outlined" />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<SendIcon />}
                      className="transition-all duration-300 hover:shadow-xl bg-blue-600 hover:bg-blue-700 text-white"
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Toaster position="bottom-center" />
      </div>
    </section>
  )
}

export default Contact
