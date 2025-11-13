// src/components/TopBanner/TopBanner.jsx
import React from "react";
import "./TopBanner.scss"

const TopBanner = () => {
  return (
    <div
      className="topbanner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "32px",
        backgroundColor: "#125e30ff",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        fontWeight: "bold",
        fontSize: "14px",
        gap: "6px",
      }}
    >
      🌲 ¡Bienvenido a la web! |
      <span
        style={{
          backgroundColor: "white",
          color: "green",
          padding: "2px 8px",
          borderRadius: "4px",
          marginLeft: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
          fontWeight: "bold",
        }}
      >
        Envío GRATIS A CAJAMARCA
      </span>{" "}
      visitanos en nuestras redes sociales
    </div>
  );
};

export default TopBanner;
