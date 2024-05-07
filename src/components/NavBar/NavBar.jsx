import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>
        <Link to="/">VirtualStore</Link>
      </h3>
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
