import React from "react";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, decrease, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600">Agrega productos desde la tienda.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Tu carrito</h2>
      <div className="grid grid-cols-1 gap-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">S/ {item.price.toFixed(2)}</p>
              <div className="mt-2 flex items-center gap-2">
                <button onClick={() => decrease(item.id)} className="px-2 border rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addOrIncrease(item => item)} className="px-2 border rounded" style={{ visibility: "hidden" }}>+</button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">S/ {(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="mt-2 text-sm text-red-600">Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button onClick={clearCart} className="text-sm text-red-600">Vaciar carrito</button>
        <div className="text-right">
          <p className="text-gray-500">Total</p>
          <p className="text-2xl font-bold">S/ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
