import React from "react";
import { useCart } from "../../context/CartContext";
import "./Cart.scss";
import LogoHeader from "../../components/LogoHeader/LogoHeader";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
    <LogoHeader />
    <div className="cart-container">
      <h2>🛒 Tu Carrito</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: S/ {item.price}</p>
                  <p>Total: S/ {(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="cart-total">Total a pagar: S/ {total.toFixed(2)}</h3>
          <button className="clear-btn" onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
    </>
  );
}
