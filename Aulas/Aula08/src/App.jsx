
import './App.css'
import { GiChameleonGlyph } from "react-icons/gi"
import { Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container style={{ backgroundColor: "gray" }}>

      {/* <h1>React Icons</h1>
      <h2>Camaleão / Chameleon</h2>

      <div className='camaleao'>
        <GiChameleonGlyph />
      </div> */}

      <Row style={{ backgroundColor: "darkgoldenrod", padding: 30 }}>
        <Col style={{ backgroundColor: "lightgray" }}>12 COLUNAS</Col>
      </Row>
      <Row style={{ backgroundColor: "darkgoldenrod", padding: 30 }}>
        <Col md={9} style={{ backgroundColor: "lightgray" }}>6 COLUNAS</Col>
        <Col md={3} style={{ backgroundColor: "lightgray" }}>6 COLUNAS</Col>
      </Row>
      <Row style={{ backgroundColor: "darkgoldenrod", padding: 30 }}>
        <Col md={8} style={{ backgroundColor: "lightgray" }}>6 COLUNAS</Col>
      </Row>


    </Container>

  )
}

export default App


