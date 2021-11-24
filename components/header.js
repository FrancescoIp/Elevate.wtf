import { Row, Col, Navbar, Nav } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'


const variantsNavContainer = {
  hidden: {
    y: "-50vh",
  },
  visible: {
    y: "0vh",
    transition: {
      type: "spring",
      stiffness: 80,
      duration: 1.5,
      delay: 0.5
    }
  }
}

const variantTitleContainerChild = {
  hidden: {
    scale: 0.2
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.5
    }
  }
}
const variantTitleChild = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.8,
      delay: 1.3
    }
  }
}
const variantTitleh1 = {
  hidden: {
    x: "-100vw"
  },
  visible: {
    x: "0vw",
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1.8
    }
  }
}
const variantTitleh2 = {
  hidden: {
    x: "100vw"
  },
  visible: {
    x: "0vw",
    transition: {
      type: "spring",
      stiffness: 50,
      delay: 2
    }
  }
}

function Header() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={variantsNavContainer}
    >
      <Row>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navigation-bar-container">
            <Nav>
              <Row className="d-flex align-items-center justify-content-center menu-navigazione" >
                <Col as={motion.div} whileHover={{ scale: 1.2, rotateX: 360, duration: 0.5 }}>
                  <Link href="/">Home</Link>
                </Col>
                <Col as={motion.div} whileHover={{ scale: 1.2, rotateX: 360, duration: 0.5 }}>
                  <Link href="#servizi">Servizi</Link>
                </Col>
                <Col
                  as={motion.div}
                  transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
                  animate={{ rotateY: 360 }}>

                  <Image
                    alt="LOGO"
                    src="/prisma.1.png"
                    width={300}
                    height={300}>
                  </Image>
                </Col>
                <Col as={motion.div} whileHover={{ scale: 1.2, rotateX: 360, duration: 0.5 }}>
                  <Link href="#contattaci">Contattaci</Link>
                </Col>
                <Col as={motion.div} whileHover={{ scale: 1.2, rotateX: 360, duration: 0.5 }}>
                  <Link href="/faq">FAQ</Link>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Col xs={12}>
          <motion.div
            variants={variantTitleContainerChild}
            className="titleBorder">
            <motion.div
              className="title-container"
              variants={variantTitleChild}
              initial="hidden"
              animate="visible">
              <motion.h1 variants={variantTitleh1}>Elevate</motion.h1>
              <motion.h2 variants={variantTitleh2}>What The F*cking Marketing</motion.h2>
            </motion.div>
          </motion.div>
        </Col>
      </Row>


    </motion.div>
  )
}

export default Header
// animate={{ rotateY: 360, duration: 1, }}>