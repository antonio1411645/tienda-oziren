import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link to="/about" className="about-link">
          Acerca de Nosotros
        </Link>
      </div>

      <div className="footer-bottom">
        {/* Redes sociales */}
        <div className="socials">
          <a href="https://www.instagram.com/ozirengroup?igsh=am5zZzFyenI2NXli" target="_blank" rel="noopener noreferrer" >
            <img src="/imagenes/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@tu_cuenta" target="_blank" rel="noopener noreferrer ">
            <img src="/imagenes/tiktok.png" alt="TikTok" className="tiktok"/>
          </a>
          <a href="https://wa.me/51961482429" target="_blank" rel="noopener noreferrer">
            <img src="/imagenes/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>

        {/* Medios de pago */}
        <div className="payments">
          <img src="/imagenes/medios_pago.png" alt="Medios de pago" />
        </div>

        {/* Seguridad */}
        <div className="secure">
          <p>Tienda 100% Segura</p>
        </div>
      </div>
    </footer>
  );
}
