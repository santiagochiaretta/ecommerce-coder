import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h3>
          <Link className="navbar-title-link" to={"/"}>
            VirtualStore
          </Link>
        </h3>
      </div>
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-list-item-link active"
                : "navbar-list-item-link"
            }
            to="/category/correas"
          >
            Correas
          </NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-list-item-link active"
                : "navbar-list-item-link"
            }
            to="/category/filtros"
          >
            Filtros
          </NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-list-item-link active"
                : "navbar-list-item-link"
            }
            to="/category/rodamientos"
          >
            Rodamientos
          </NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-list-item-link active"
                : "navbar-list-item-link"
            }
            to="/maintenance"
          >
            Neumáticos
          </NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "navbar-list-item-link active"
                : "navbar-list-item-link"
            }
            to="/contact"
          >
            Contacto
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
