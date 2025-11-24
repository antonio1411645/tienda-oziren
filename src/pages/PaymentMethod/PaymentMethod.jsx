import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./PaymentMethod.scss";

export default function PaymentMethod() {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();

  const handleConfirm = async () => {
    if (!method) {
      alert("Por favor selecciona un método de pago.");
      return;
    }

    const checkoutData = JSON.parse(localStorage.getItem("checkoutData")) || {};

    if (!checkoutData || !checkoutData.correo) {
      alert("No se encontraron los datos del cliente.");
      return;
    }

    alert(`✅ Pago realizado con ${method}. ¡Gracias por tu compra, ${checkoutData.nombre}!`);

    try {
      await emailjs.send(
        "service_chs97o5", 
        "template_2mto0xa", 
        {
          to_name: checkoutData.nombre,
          to_email: checkoutData.correo,
          dni: checkoutData.dni || "No registrado",
          telefono: checkoutData.telefono || "No registrado",
          direccion: checkoutData.direccion || "No especificada",
          payment_method: method,
        },
        "O2lsZdzaC58PcOr1a" // tu Public Key
      );

      console.log("📩 Correo enviado con éxito!");
      navigate("/confirmation"); 
    } catch (error) {
      console.error("❌ Error al enviar el correo:", error);
      alert("Hubo un error al enviar el correo de confirmación.");
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h1>Selecciona tu método de pago</h1>

        <div className="payment-options">
          <button
            className={`option ${method === "tarjeta" ? "active" : ""}`}
            onClick={() => setMethod("tarjeta")}
          >
            💳 Tarjeta de Débito o Crédito
          </button>

          <button
            className={`option ${method === "yape" ? "active" : ""}`}
            onClick={() => setMethod("yape")}
          >
            📱 Pagar con Yape
          </button>

          <button
            className={`option ${method === "plin" ? "active" : ""}`}
            onClick={() => setMethod("plin")}
          >
            💠 Pagar con Plin
          </button>
        </div>

        {method && (
          <div className="payment-info">
            {method === "tarjeta" && (
              <div className="card-payment">
                <p>Simulación de pago con tarjeta.</p>
                <input type="text" placeholder="Número de tarjeta" />
                <input type="text" placeholder="Nombre en la tarjeta" />
                <div className="small-inputs">
                  <input type="text" placeholder="MM/AA" />
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            )}

            {(method === "yape" || method === "plin") && (
              <div className="qr-section">
                <p>Escanea este QR para completar tu pago (simulación)</p>
                <img
                  src={`/videos/imagenes/${method}.png`}
                  alt={`${method} QR`}
                  className="qr-image"
                />
              </div>
            )}

            <button className="confirm-btn" onClick={handleConfirm}>
              Confirmar pago
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
