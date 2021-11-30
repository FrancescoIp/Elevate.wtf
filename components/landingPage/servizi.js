import { motion, useAnimation } from 'framer-motion'
import { Row, Col, Container } from 'react-bootstrap'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'


function Servizio1() {
  const [ref, inView] = useInView();
  const animation1 = useAnimation()

  useEffect(() => {
    if (inView) {
      animation1.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.3
        }
      });
    }
    if (!inView) {
      animation1.start({
        x: "80vw"
      })
    }
  }, [inView, animation1])

  return (
    <Col
      ref={ref}
      as={motion.div}
      style={{ border: "2px solid black" }}
      animate={animation1}
      className="p-2 mb-2"
    >
      <h3>Social Media Marketing</h3>
      <p>Soluzioni smart per la pubblicità 3.0. Usa i nostri servizi per approdare nei social con giusto stile.</p>
      <p>Pannelle calzoni crociate panelle arancina o arancino. Mela banana tomatomatomato</p>
    </Col>
  )
}

function Servizio2() {
  const [ref2, inView2] = useInView();

  const animation2 = useAnimation()

  useEffect(() => {
    if (inView2) {
      animation2.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.3
        }
      });
    }
    if (!inView2) {
      animation2.start({
        x: "-80vw",
      })
    }
  }, [inView2, animation2])

  return (
    <Col
      ref={ref2}
      as={motion.div}
      style={{ border: "2px solid red" }}
      animate={animation2}
      className="p-2 mb-2"
    >
      <h3>Servizi Web</h3>
      <p>Costruzioni siti internet, di sana pianta o con wordpress. Manutenzione e gestione siti internet</p>
      <p>Altre cose da aggiugere altrimenti spacco tutto</p>
    </Col>
  )
}

function Servizio3() {
  const [ref3, inView3] = useInView();
  const animation3 = useAnimation()

  useEffect(() => {
    if (inView3) {
      animation3.start({
        x: 0,
        transition: {
          type: "spring", duration: 1, bounce: 0.3
        }
      });
    }
    if (!inView3) {
      animation3.start({
        x: "80vw"
      })
    }
  }, [inView3, animation3])

  return (
    <Col
      ref={ref3}
      as={motion.div}
      style={{ border: "2px solid black" }}
      animate={animation3}
      className="p-2 mb-2"
    >
      <h3>Grafiche</h3>
      <p>Creiamo grafiche per ogni vostra esigenza</p>
      <p>Pannelle calzoni crociate panelle arancina o arancino. Mela banana tomatomatomato</p>
    </Col>
  )
}

function Servizi() {
  return (
    <Container >
      <Row md={1}>
        <h2 className="title-servizi" id="servizi">I Nostri Servizi</h2>
        <Servizio1 />
        <Servizio2 />
        <Servizio3/ >
      </Row>
    </Container>
  )
}

export default Servizi