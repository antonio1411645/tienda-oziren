import { Link } from "react-router-dom";
import "./LogoHeader.scss";

export default function LogoHeader() {
  return (
    <header className="logo-header">
      <Link to="/" className="logo-text">
        OZIREN
      </Link>
    </header>
  );
}
