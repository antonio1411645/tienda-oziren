import React, { useState } from "react";
import "./Checkout.scss";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    correo: "",
    telefono: "",
    direccion: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Puedes guardar los datos temporalmente (por ejemplo, localStorage)
    localStorage.setItem("checkoutData", JSON.stringify(formData));

    // Luego redirige al paso de método de pago
    navigate("/payment-method");
  };

  return (
    <div className="checkout">
      <div className="checkout-container">
        <h2>Finalizar Compra</h2>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej: Juan Pérez"
              required
            />
          </div>

          <div className="form-group">
            <label>DNI</label>
            <input
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              placeholder="Ej: 76543210"
              required
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="tuemail@ejemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="987654321"
              required
            />
          </div>

          <div className="option-group">
            <p>Tipo de entrega:</p>
            <label>
              <input
                type="radio"
                name="deliveryType"
                value="pickup"
                checked={deliveryType === "pickup"}
                onChange={() => setDeliveryType("pickup")}
              />
              Recojo en tienda
            </label>

            <label>
              <input
                type="radio"
                name="deliveryType"
                value="delivery"
                checked={deliveryType === "delivery"}
                onChange={() => setDeliveryType("delivery")}
              />
              Envío a domicilio
            </label>
          </div>

          {deliveryType === "delivery" && (
            <div className="form-group">
              <label>Dirección de entrega</label>
              <input
                type="text"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                placeholder="Ej: Av. Los Olivos 123, Trujillo"
                required
              />
            </div>
          )}

          <button type="submit" className="btn-comprar">
            Continuar al pago
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
