import React from "react";
import "./HeroVideo.scss";

export default function Hero() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/videos/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      <div className="hero-content">
        <h1 className="hero-title">OZIREN</h1>
        <p className="hero-subtitle">TEMPORADA FINAL</p>
      </div>
    </section>
  );
}
