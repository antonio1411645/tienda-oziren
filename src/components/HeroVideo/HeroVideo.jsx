import "./HeroVideo.scss";

export default function HeroVideo() {
  return (
    <div className="hero">
      <video
        className="vid"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <div className="txt">
        <h1>OZIREN</h1>
        <p>TEMPORADA FINAL</p>
      </div>
    </div>
  );
}
