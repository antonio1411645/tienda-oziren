import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import CategoryPage from "./pages/CategoryPage/CategoryPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import About from "./pages/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import PaymentMethod from "./pages/PaymentMethod/PaymentMethod.jsx";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage.jsx";
import TopBanner from "./components/TopBanner/TopBanner.jsx";
import "./App.css"; // 👈 agrega estilos globales aquí

// 📌 Componente Layout
function Layout() {
  const location = useLocation();

  const hideNavbarPaths = ["/cart", "/checkout", "/payment-method", "/confirmation"];


  // Mostrar Navbar solo en Home
  const showNavbar =
    !hideNavbarPaths.includes(location.pathname) &&
    (location.pathname === "/" || location.pathname.startsWith("/category"));

  // Ocultar Footer en estas rutas
  const hideFooterPaths = ["/checkout", "/payment-method", "/confirmacion"];
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div className="app-container">
      <TopBanner />
      <div style={{ marginTop: "32px" }}>
        {showNavbar && <Navbar />}
      </div>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}

// 📌 Componente principal
export default function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <Layout />
      </CartProvider>
    </Router>
  );
}
