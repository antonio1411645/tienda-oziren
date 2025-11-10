import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const categories = [
  { name: "Juguetes", description: "Encuentra los juguetes más divertidos.", image: "/imagenes/juguete.jpg", path: "juguetes", size: "large" },
  { name: "Niño", description: "Ropa y accesorios para niños.", image: "/imagenes/nino.jpg", path: "boy", size: "medium" },
  { name: "Niña", description: "Ropa y accesorios para niñas.", image: "/imagenes/nina.jpg", path: "girl", size: "medium" },
  { name: "Hombre", description: "Estilo y elegancia para hombres.", image: "/imagenes/hombre.jpg", path: "hombre", size: "medium" },
  { name: "Mujer", description: "Moda y tendencias para mujeres.", image: "/imagenes/mujer.jpg", path: "mujer", size: "medium" },
  { name: "Novedades", description: "Lo último en nuestra tienda.", image: "/imagenes/novedades.jpg", path: "novedades", size: "large" },
  { name: "Accesorios", description: "Complementos que marcan la diferencia.", image: "/imagenes/accesorios.jpg", path: "accesorios", size: "large" },
];

export default function Categories() {
  // 🌀 Efecto de movimiento de texto al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const texts = document.querySelectorAll(".cat-text");
      texts.forEach((text) => {
        const rect = text.getBoundingClientRect();
        const offset = rect.top - window.innerHeight / 2;
        // ajusta la velocidad del movimiento (0.2 es sutil)
        const moveY = offset * 0.2;
        text.style.transform = `translateY(${moveY}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="categories">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`category-item ${cat.size}`}
          style={{ backgroundImage: `url(${cat.image})` }}
        >
          <Link to={`/category/${cat.path}`} className="category-link">
            <div className="cat-overlay">
              <div className="cat-text">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
