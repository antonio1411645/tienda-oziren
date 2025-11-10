import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext"; // 👈 igual que en tu CartPage
import "./Navbar.scss";

export default function Nav() {
  const [scroll, setScroll] = useState(false);
  const { cart } = useCart(); // 👈 obtenemos el carrito

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`n ${scroll ? "n-w" : ""}`}>
      <div className="nav-container">
        {/* 🔹 Logo */}
        <div className="lg">
          <Link to="/" className="brand-link">OZIREN</Link>
        </div>

        {/* 🔹 Links */}
        <ul className="lk">
          <li><Link to="/category/juguetes">Juguetes</Link></li>
          <li><Link to="/category/boy">Niño</Link></li>
          <li><Link to="/category/girl">Niña</Link></li>
          <li><Link to="/category/hombre">Hombre</Link></li>
          <li><Link to="/category/mujer">Mujer</Link></li>
          <li><Link to="/category/accesorios">Accesorios</Link></li>
          <li><Link to="/category/novedades">Novedades</Link></li>

          {/* 🛒 Carrito con contador */}
          <li className="cart-item">
            <Link to="/cart" className="cart-link">
              <FaShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="cart-count">{cart.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
