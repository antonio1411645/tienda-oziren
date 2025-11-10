import React from "react";
import "./About.scss";
import aboutBg from "../../imagenes/footer.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="about-container"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="about-overlay"></div>

      <Link to="/" className="logo-text">
  OZIREN
</Link>

      <div className="about-content">
        <h1>Sobre Nosotros</h1>
        <p>
          En <strong>Ozire</strong>, fusionamos la elegancia con la autenticidad.
          Cada prenda que diseñamos representa una conexión entre lo clásico y lo
          moderno, inspirada en la identidad cultural y el refinamiento del detalle.
        </p>
        <p>
          Nos impulsa la pasión por ofrecer experiencias únicas, donde la calidad, el
          diseño y la historia se entrelazan para crear piezas que trascienden el tiempo.
        </p>
        <p>
          Creemos que vestir es más que una elección: es una expresión de carácter,
          confianza y estilo. Cada colección busca resaltar la esencia de quienes
          valoran lo exclusivo y lo auténtico.
        </p>
      </div>
    </div>
  );
};

export default About;
