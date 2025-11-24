import React, { useState } from "react";
import "./ProductCard.scss";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");

  function handleBuy() {
    if (product.colors?.length && !selectedColor) {
      alert("Por favor selecciona un color.");
      return;
    }
    if (product.sizes?.length && !selectedSize) {
      alert("Por favor selecciona una talla.");
      return;
    }

    addToCart({ ...product, selectedColor, selectedSize });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image1} alt={product.name} className="main-img" />
        <img src={product.image2} alt={product.name} className="hover-img" />
      </div>

      <div className="product-info">
        <p className="name">{product.name}</p>
        <div className="price-section">
  {product.oldPrice && (
    <div className="old-price">{product.oldPrice}</div>
  )}
  <div className="current-price">{product.price}</div>
</div>


        <p className="tag">{product.tag}</p>

        {product.colors && product.colors.length > 0 && (
          <div className="select-group">
            <label>Color:</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {product.colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        )}

        {product.sizes && product.sizes.length > 0 && (
          <div className="select-group">
            <label>Talla:</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        )}

        <button className="buy-btn" onClick={handleBuy}>
          🛒 Comprar
        </button>

        {added && <div className="added-message">✅ Producto añadido al carrito</div>}
      </div>
    </div>
  );
}
