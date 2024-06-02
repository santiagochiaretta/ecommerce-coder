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
        <h1>Carrito de compras</h1>
        <div>
          <p>No hay productos en el carrito</p>
          <Link to={"/"} className="btn">Volver a la página principal</Link>
        </div>
      </section>
    );
  } else {
    return (
      <section className="cart-view">
        <h1>Carrito de compras</h1>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <button onClick={clear}>Vaciar Carrito</button>
                </td>
              </tr>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} width={64} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>x{item.quantity}</td>
                  <td>${item.quantity * item.price}</td>
                  <td onClick={() => removeItem(item.id)}>
                    <GoTrash
                      width={32}
                      title="Eliminar producto"
                      cursor="pointer"
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={4}>
                  <b>Total</b>
                </td>
                <td>
                  <b>${getCartTotal()}</b>
                </td>
                <td>
                  <Link to={"/checkout"} className="btn">
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
