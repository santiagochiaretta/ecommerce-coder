import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>
        <Link to={"/"}>VirtualStore</Link>
      </h3>
      <ul className="navbar-list">
        <li>
          <Link to={"/category/correas"}>Correas</Link>
        </li>
        <li>
          <Link to={"/category/filtros"}>Filtros</Link>
        </li>
        <li>
          <Link to={"/category/rodamientos"}>Rodamientos</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
