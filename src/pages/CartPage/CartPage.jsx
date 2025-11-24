import React from "react";
import { useCart } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import LogoHeader from "../../components/LogoHeader/LogoHeader";
import "./CartPage.scss";

export default function CartPage() {
  const { cart, removeFromCart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <LogoHeader />

      <div className="cart-page">
        <div className="cart-container">
          <div className="cart-items">
            <h1>Tu carrito</h1>
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Tu carrito está vacío.</p>
                <Link to="/" className="btn-back">
                  Volver a la tienda
                </Link>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image2 || item.image1} alt={item.name} />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      {item.selectedColor && (
                        <p className="item-color">
                          <strong>Color:</strong> {item.selectedColor}
                        </p>
                      )}

                      {item.selectedSize && (
                        <p className="item-size">
                          <strong>Talla:</strong> {item.selectedSize}
                        </p>
                      )}

                      <p className="price">{item.price}</p>
                      <p>Cantidad: {item.quantity}</p>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}

                <button className="clear-btn" onClick={clearCart}>
                  Vaciar carrito
                </button>
              </>
            )}
          </div>

          {cart.length > 0 && (
            <div className="cart-summary">
              <h2>Resumen de compra</h2>
              <div className="summary-details">
                <p>Subtotal:</p>
                <span>S/ {total.toFixed(2)}</span>
              </div>
              <div className="summary-details">
                <p>Envío:</p>
                <span>Gratis</span>
              </div>
              <div className="summary-total">
                <p>Total:</p>
                <span>S/ {total.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="checkout-btn">
                Finalizar compra
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
