
import { motion } from 'framer-motion'
import { useState } from 'react';

const variantsLAnimation = {
  hidden: {
    y: 0,
    opacity: 0,
    scale: 0.5
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1.5,
    rotateY: 720,
    transition: {
      ease: "easeInOut",
      duration: 2.5
    }
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  }
};

const variantsFadeOut = {
  visible: {
    opacity: 0,
    scale: 0.7,
    rotateY: 720,
    transition:{
      duration:1.5
    }
  }
}



function LandingAnimation({ setLoading }) {

  const [fadeOut, setFadeOut] = useState(false)

  const handleAnimation = () => {
    setFadeOut(true);
    setTimeout(() => { setLoading(false); }, 1000)
  }

  return (
    <motion.img
      key="/prisma.1.png"
      src="/prisma.1.png"
      alt="Picture of the author"
      width={300}
      height={300}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={fadeOut ? variantsFadeOut : variantsLAnimation}
      onAnimationComplete={() => handleAnimation()}
    />
  )
}

export default LandingAnimation