import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import SectionPresentacion from "./components/SectionPresentacion";
import SectionForm from "./components/SectionForm";
import SectionListaInvitados from "./components/SectionListaInvitados";
import Footer from "./components/Footer";

function App() {
  //Iniciamos nuestro local storage
  let invitadosGuardados = JSON.parse(localStorage.getItem("invitados")) || [];

  //Generar un hook de estado vacio con los diferentes clientes de la veterinaria
  const [invitados, editarInvitados] = useState(invitadosGuardados);

  //Funcion que toma el invitado nuevo y lo mete en el array de invitados
  const agregarInvitado = (invitado) => {
    editarInvitados([...invitados, invitado]);
  };

  //Funcion para borrar cliente
  const eliminarInvitado = (id) => {
    editarInvitados(invitados.filter((invitado) => invitado.id !== id));
  };

  //Hook useEffect: Sirve para ejecutar alguna funcionalidad cuando hay un cambio
  //en alguna variable/hook/situacion
  useEffect(() => {
    localStorage.setItem("invitados", JSON.stringify(invitados));
  }, [invitados]);

  return (
    <Fragment>
      <Header />
      <SectionPresentacion />
      <SectionForm agregarInvitado={agregarInvitado} />
      <SectionListaInvitados invitados={invitados} eliminarInvitado={eliminarInvitado} />
      <Footer/>
    </Fragment>
  );
}

export default App;
