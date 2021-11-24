import { motion } from 'framer-motion'
import { Row, Col } from 'react-bootstrap'

function Body() {
  return (
    <Row md={1}>
      <Col  as={motion.div} style={{ height: "100px", border: "2px solid black" }}></Col>
      <Col  as={motion.div} style={{ height: "100px", border: "2px solid black" }}></Col>
    </Row>
  )
}

export default Body