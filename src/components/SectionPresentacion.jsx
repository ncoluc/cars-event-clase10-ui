import React from "react";
import logo from "../imagenes/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SectionPresentacion = () => {
  return (
    <section className="section-presentacion">
      <Container>
        <Row>
          <Col>
            <img src={logo} alt="Logo Colu Cars Events" />
          </Col>
          <Col>
            <h1>Colu Cars Events</h1>
            <p>¡Descubre los autos más impresionantes!</p>
            <p>Nuestros eventos son los mejores del pais.</p>
            <p>Realizados siempre en el autodromo Oscar Galvez</p>
          </Col>
        </Row>
      </Container>
      <div className="div-separacion"></div>
    </section>
  );
};

export default SectionPresentacion;
