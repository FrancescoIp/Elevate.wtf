import { motion } from 'framer-motion'
import Header from '../header'
import Servizi from './servizi'
import Carosello from '../carosello'
import Contatti from '../contatti/contatti'

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
     className="BG-container"
     variants={variantsBody}
     initial="hidden"
     animate="visible"
    >
      <Header />
      {/* <Carosello /> */}
      <Servizi />
      <Contatti />
    </motion.div>
  )
}

export default LandingPage

