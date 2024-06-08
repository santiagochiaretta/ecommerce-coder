import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import "./CartView.css";

const Cart = () => {
  const { cart, removeItem, clear, getCartCount, getCartTotal } =
    useContext(CartContext);

  if (getCartCount() === 0) {
    return (
      <section className="cart-view">
        <div className="cart-empty">
          <p>No hay productos en el carrito, todavía...</p>
          <Link to={"/"} className="btn">
            Volver a la página principal
          </Link>
        </div>
      </section>
    );
  } else {
    return (
      <section className="cart-view">
        <div className="cart-content">
          <table className="cart-table">
            <tbody>
              <tr className="cart-row">
                <td className="cart-row-cell">
                  <button onClick={clear} className="cart-clear-btn">
                    Vaciar Carrito
                  </button>
                </td>
              </tr>
              {cart.map((item) => (
                <tr key={item.id} className="cart-row">
                  <td className="cart-row-cell">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={64}
                      className="cart-item-img"
                    />
                  </td>
                  <td className="cart-row-cell">{item.title}</td>
                  <td className="cart-row-cell">${item.price}</td>
                  <td className="cart-row-cell">x{item.quantity}</td>
                  <td className="cart-row-cell">
                    ${item.quantity * item.price}
                  </td>
                  <td
                    onClick={() => removeItem(item.id)}
                    className="cart-row-cell"
                  >
                    <GoTrash
                      width={32}
                      title="Eliminar producto"
                      cursor="pointer"
                      className="cart-item-remove-icon"
                    />
                  </td>
                </tr>
              ))}
              <tr className="cart-row">
                <td colSpan={4} className="cart-row-cell">
                  <b>Total</b>
                </td>
                <td className="cart-row-cell">
                  <b>${getCartTotal()}</b>
                </td>
                <td className="cart-row-cell">
                  <Link to={"/checkout"} className="checkout-btn">
                    Checkout
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
};

export default Cart;
