import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

function Carosello() {
  return (
    <Carousel style={{margin: "1em 0"}}>
      <Carousel.Item interval={1000}>
        <Image
          className="d-block w-100"
          src="/placeholder.jpg"
          alt="First slide"
          width={1200}
          height={400}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Immagini con l unico scopo di controllare la funzionalità del componente</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image
          className="d-block w-100"
          src="/placeholder.jpg"
          alt="Second slide"
          width={1200}
          height={400}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Immagini con l unico scopo di controllare la funzionalità del componente</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/placeholder.jpg"
          alt="Third slide"
          width={1200}
          height={400}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Immagini con l unico scopo di controllare la funzionalità del componente</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carosello