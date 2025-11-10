import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmationPage.scss";
import LogoHeader from "../../components/LogoHeader/LogoHeader";

export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <>
    <LogoHeader />
    <div className="confirmation-page">
       <video className="background-video" autoPlay loop muted playsInline>
        <source src="/videos/confirmacion.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <div className="confirmation-box">
        <h1>🎉 ¡Gracias por tu compra!</h1>
        <p>Tu pedido ha sido confirmado exitosamente.</p>
        <button className="home-btn" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    </div>
    </>
  );
}
