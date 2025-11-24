import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X, Heart, User } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();
  const totalQty = cart.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-active" : ""}`}>
      <div className="nav-inner">
        <div className="nav-left">
          <button className="nav-menu" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
          <h1 className="nav-logo">OZIREN</h1>
        </div>

        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          <Link to="/" className="nav-item">Inicio</Link>
          <Link to="/" className="nav-item">Colecciones</Link>
          <Link to="/" className="nav-item">Nosotros</Link>
        </nav>

        <div className="nav-right">
          <button className="nav-icon"><Search size={18} /></button>
          <button className="nav-icon"><Heart size={18} /></button>
          <button className="nav-icon"><User size={18} /></button>

          <button className="nav-cart" onClick={() => navigate("/cart")} aria-label="cart">
            <ShoppingCart size={20} />
            {totalQty > 0 && (
              <span className="cart-count">{totalQty}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
