import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

function Contatti() {
  return (
    <Container>
      <h2 className="title-contatti">Chi siamo?</h2>
      <Row xs={1} md={2} className="d-flex justify-content-between" id="contatti">
        <Col className="text-center" >
          <Image
            className="contatti-image-radius"
            src="/placeholder.jpg"
            alt="placeholder"
            width={200}
            height={200}
          />
          <div>
            <h3>Francesco Ippolito</h3>
            <p>Deciso a dare una svolta alla sua carriera, inizia un percorso didattico per la formazione da web designer</p>
            <p>
              <a href="https://www.facebook.com/Alquantomorto">
                <AiFillFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/tetan0/">
                <AiFillInstagram size={30} />
              </a>
            </p>
          </div>
        </Col>
        <Col className="text-center">
          <Image
            className="contatti-image-radius"
            src="/placeholder.jpg"
            alt="placeholder"
            width={200}
            height={200}
          />
          <div>
            <h3>Pietro Giudice</h3>
            <p>Appassionato di marketing 3.0 si forma e cresce come social
              media manager, parallelamente affina le sue abilità da grafico
            </p>
            <p>
              <a href="https://www.facebook.com/realpeterjudge">
                <AiFillFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/iampeterjudge/">
                <AiFillInstagram size={30} />
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contatti