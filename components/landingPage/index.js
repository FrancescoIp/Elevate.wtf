import { motion } from 'framer-motion'
import Header from '../header'
import Body from './body'

const variantsBody = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition:{
      type:"spring",
      duration: 1.5
    }
  }
}

function LandingPage() {
  return (
    <motion.div 
     variants={variantsBody}
     initial="hidden"
     animate="visible"
    >
      <Header />
      <Body />
    </motion.div>
  )
}

export default LandingPage

