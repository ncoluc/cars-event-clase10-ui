import React from "react";
import { Table, Button, Container, Row, Col } from "react-bootstrap";

const SectionListaInvitados = ({ invitados, eliminarInvitado }) => {
  const listarInvitados = (invitados) => {
    return invitados.map((invitado, index) => (
      <tr key={invitado.id}>
        <td>{index + 1}</td>
        <td>{invitado.nombre}</td>
        <td>{invitado.dni}</td>
        <td>{invitado.auto}</td>
        <td>
          <Button variant="danger" onClick={() => eliminarInvitado(invitado.id)}>
            Eliminar
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <section id="listaInvitados">
      <Container>
        <Row>
          <Col>
          <h2>- Lista de invitados -</h2>
            {invitados.length === 0 ? (
              <p>No hay invitados registrados.</p>
            ) : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>DNI</th>
                    <th>Auto</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>{listarInvitados(invitados)}</tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>
      <div className="div-separacion"></div>
    </section>
  );
};

export default SectionListaInvitados;
