import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === id);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  if (!product) return <div className="p-8">Producto no encontrado</div>;

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <img src={product.image} alt={product.name} className="w-full rounded-lg object-cover" />
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold mb-6">S/ {product.price.toFixed(2)}</p>
          <div className="flex gap-4">
            <button onClick={() => addToCart(product)} className="bg-black text-white px-4 py-2 rounded">Añadir al carrito</button>
            <button onClick={() => navigate(-1)} className="border px-4 py-2 rounded">Volver</button>
          </div>
        </div>
      </div>
    </div>
  );
}
