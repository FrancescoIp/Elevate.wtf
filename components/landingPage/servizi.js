import { motion, useAnimation } from 'framer-motion'
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
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
    <Row
      as={motion.div}
      animate={animation1}
      className="d-flex align-items-center justify-content-around "
    >
      <Col
        xs={4}
        ref={ref}
        as={motion.div}
        className="p-2 mb-2"
      >
        <h3>Social Media Marketing</h3>
        <p>Soluzioni smart per la pubblicità 3.0. Usa i nostri servizi per approdare nei social con giusto stile.</p>
        <p>Pannelle calzoni crociate panelle arancina o arancino. Mela banana tomatomatomato</p>
      </Col>
      <Col as={motion.div} xs={4}>
        <Image
          alt="socialMedia"
          src="/socialMediaPic.png"
          width={300}
          height={300}
        />
      </Col>
    </Row>

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
    <Row
      className="d-flex align-items-center justify-content-around"
      as={motion.div}
      animate={animation2}
    >
      <Col as={motion.div} xs={4}>
        <Image
          blurDataURL="/blur-test.png"
          placeholder="blur"
          alt="webdev"
          src="/webdevPic.png"
          width={300}
          height={300}
        />
      </Col>
      <Col
        xs={4}
        ref={ref2}
        as={motion.div}
        className="p-2 mb-2"
      >
        <h3>Servizi Web</h3>
        <p>Costruzioni siti internet, di sana pianta o con wordpress. Manutenzione e gestione siti internet</p>
        <p>Altre cose da aggiugere altrimenti spacco tutto</p>
      </Col>
    </Row>

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
    <Row
      className="d-flex align-items-center justify-content-around"
      as={motion.div}
      animate={animation3}
    >
      <Col
        xs={4}
        ref={ref3}
        as={motion.div}
        className="p-2 mb-2"
      >
        <h3>Grafiche</h3>
        <p>Creiamo grafiche per ogni vostra esigenza</p>
        <p>Pannelle calzoni crociate panelle arancina o arancino. Mela banana tomatomatomato</p>
      </Col>
      <Col as={motion.div} xs={4}>
        <Image
          alt="graphicPic"
          src="/graphicPic.png"
          width={300}
          height={300}
        />
      </Col>
    </Row>

  )
}

function Servizi() {
  return (
    <Container >
      <h2 className="title-servizi" id="servizi">I Nostri Servizi</h2>
      <Servizio1 />
      <Servizio2 />
      <Servizio3 />
    </Container>
  )
}

export default Servizi