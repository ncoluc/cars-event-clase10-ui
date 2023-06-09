import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { v4 as uuid } from "uuid";

const SectionForm = ({ agregarInvitado }) => {
  //Creo un invitado vacio y lo inicializo con un hook de estado
  const [invitado, editarInvitado] = useState({
    nombre: "",
    dni: "",
    auto: "",
  });

  //Extraer los valores
  const { nombre, dni, auto } = invitado;

  //Creo otro hook de estados para manejar el error
  const [error, setError] = useState(false);

  //Tomamos lo que el usuario escribe en el form
  const handleChange = (e) => {
    editarInvitado({
      ...invitado,
      [e.target.name]: e.target.value,
    });
    console.log("Tomo los datos...");
  };

  const submitForm = (e) => {
    e.preventDefault();

    //Validar el formulario
    if (nombre.trim() === "" || dni.trim() === "" || auto.trim() === "") {
      setError(true);
      return;
    }

    //Mensaje de error (evitar mensaje)
    setError(false);

    //Poner un id
    invitado.id = uuid();
    console.log(invitado);

    //Guardar el invitado
    agregarInvitado(invitado);

    //Limpiar el formulario
    editarInvitado({
      nombre: "",
      dni: "",
      auto: "",
    });

    console.log("Invitado registrado.");
  };

  return (
    <section id="registrate">
      <Container>
        <Row>
          <Col>
            <h1>Registrate en nuestro evento</h1>
            <h4>Te esperamos el día 31 de julio de 2023</h4>
            <p>En el autodromo Oscar Galvez</p>
            <p>Para ver los mejores autos del pais.</p>
            <p>Desde clasicos, superautos e iconicos autos japoneses</p>
          </Col>
          <Col>
            <Form onSubmit={submitForm}>
              <Form.Group>
                <Form.Label>NOMBRE</Form.Label>
                <Form.Control type="text" placeholder="Nombre completo" name="nombre" onChange={handleChange} value={nombre} />
              </Form.Group>
              <Form.Group>
                <Form.Label>DNI</Form.Label>
                <Form.Control type="number" placeholder="Sin puntos ni espacios" name="dni" onChange={handleChange} value={dni} />
              </Form.Group>
              <Form.Group>
                <Form.Label>AUTO</Form.Label>
                <Form.Control type="text" placeholder="Auto con el que asistira" name="auto" onChange={handleChange} value={auto} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Ingresar Invitado
              </Button>
            </Form>
            {error && <h4>Completa todos los datos</h4>}
          </Col>
        </Row>
      </Container>
      <div className="div-separacion"></div>
    </section>
  );
};

export default SectionForm;
