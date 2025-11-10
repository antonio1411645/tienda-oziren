import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del carrito
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // 🛒 Agregar producto al carrito
  function addToCart(product) {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // Si el producto ya existe, solo aumenta la cantidad
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Si no existe, lo agrega con cantidad 1
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // ➖ Eliminar producto del carrito
  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  // 🔄 Actualizar cantidad (para botones + y -)
  function updateQuantity(id, amount) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  }

  // 🧹 Vaciar todo el carrito
  function clearCart() {
    setCart([]);
  }

  // 💰 Calcular total
  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("S/ ", "")) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el carrito fácilmente
export function useCart() {
  return useContext(CartContext);
}
