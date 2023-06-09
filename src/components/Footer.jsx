import React from "react";

const Footer = () => {
  return (
    <footer>
      <section id="contacto" className="contacto-section">
        <div>
          <h2>CONTACTO</h2>
          <ul>
            <li>
              Autódromo Óscar y Juan Gálvez - Av. Coronel Roca 6902, Buenos Aires - 
              <a href="https://goo.gl/maps/XfsHCgg71eUH7Vur5" target="_blank" rel="noreferrer">(Link GoogleMap)</a>
            </li>
            <li>
              <a href="tel:+01146049100">Tel: 011-46049100</a>
            </li>
            <li><a href="mailto:colu.cars.eventos@gmail.com">Email: colu.cars.eventos@gmail.com</a></li>
          </ul>
        </div>
      </section>
      <p>© 2023 Colu Cars Events. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
