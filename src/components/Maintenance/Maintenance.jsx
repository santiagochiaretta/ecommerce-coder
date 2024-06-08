import { Link } from "react-router-dom";
import "./Maintenance.css";

const Maintenance = () => {
  return (
    <section className="maintenance-container">
      <h1 className="maintenance-title">Mantenimiento</h1>
      <p className="maintenance-image">🛠🚧🛠</p>
      <p className="maintenance-message">
        Esta página está actualmente en mantenimiento, disculpe las molestias.
      </p>
      <Link to={"/"} className="checkout-home-link">
        Volver a la página principal
      </Link>
    </section>
  );
};

export default Maintenance;
