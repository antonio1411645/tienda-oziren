import Nav from "../../components/Navbar/Navbar";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import Categories from "../../components/Categories/Categories";
import "./Home.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products";

export default function Home() {
  return (
    <>
      <HeroVideo />

      <Categories />

    </>
  );
}
