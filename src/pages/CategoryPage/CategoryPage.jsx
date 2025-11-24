import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";
import "./CategoryPage.scss";

export default function CategoryPage() {
  const { name } = useParams(); 

  const categoryVideos = {
    juguetes: "/videos/juguetes.mp4",
    boy: "/videos/boy.mp4",
    girl: "/videos/girl.mp4",
    hombre: "/videos/hombre.mp4",
    mujer: "/videos/mujer.mp4",
    accesorios: "/videos/accesorio.mp4",
    novedades: "/videos/novedades.mp4",
  };

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === name.toLowerCase()
  );

  if (!categoryVideos[name]) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Categoría no encontrada: {name}
      </h2>
    );
  }

  return (
     <>
    <div key={name} className="category-hero">
      <video autoPlay muted loop playsInline className="category-video">
        <source src={categoryVideos[name]} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className="category-text">
        <h1>{name.toUpperCase()}</h1>
        <p>Descubre lo mejor de nuestra colección de {name}.</p>
      </div>
    </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => <ProductCard key={prod.id} product={prod} />)
        ) : (
          <p className="no-products">
            No hay productos disponibles en esta categoría.
          </p>
        )}
      </div>

    </>
  );
}
