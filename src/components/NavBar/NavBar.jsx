import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3><a href="/#">VirtualStore</a></h3>
      <ul className="navbar-list">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">Products</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
