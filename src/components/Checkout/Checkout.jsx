import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { cart, clear, getCartCount, getCartTotal } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateOrder = async () => {
    setError(null);

    if (!name || !email || !phone) {
      setError(
        "Por favor, completa todos los campos antes de generar la orden."
      );
      return;
    }

    const buyer = { name, email, phone };
    const items = cart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));
    const fecha = new Date();
    const date = `${fecha.getDate()}-${
      fecha.getMonth() + 1
    }-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    const order = { buyer, items, date: date, total: getCartTotal() };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    try {
      const data = await addDoc(ordersCollection, order);
      setOrderId(data.id);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      clear();
    }
  };

  if (orderId) {
    return (
      <div className="checkout-container">
        <div className="checkout-success">
          <p className="checkout-success-message">
            Felicitaciones! Tu orden de compra es: <b>{orderId}</b>
          </p>
          <p className="checkout-thank-you">Gracias por tu compra.</p>
          <Link to={"/"} className="checkout-home-link">
            Volver a la página principal
          </Link>
        </div>
      </div>
    );
  } else if (getCartCount() === 0) {
    return (
      <section className="checkout-container">
        <p className="checkout-empty-message">El proceso de compra ha finalizado o la página de checkout no está disponible en este momento.</p>
        <Link to={"/"} className="checkout-home-link">
          Volver a la página principal
        </Link>
      </section>
    );
  } else {
    return (
      <>
        <section className="checkout-container">
          <div className="checkout-form-container">
            <form className="checkcout-form">
              <div className="checkout-form-name">
                <label>Nombre</label>
                <input
                  type="text"
                  onInput={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="checkout-form-email">
                <label>Email</label>
                <input
                  type="email"
                  onInput={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="checkout-form-phone">
                <label>Teléfono</label>
                <input
                  type="number"
                  onInput={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </div>
              <button
                type="button"
                className="checkout-form-button"
                onClick={generateOrder}
              >
                Generar Orden
              </button>
            </form>
          </div>
          <div className="checkout-items-container">
            <table className="checkout-items-table">
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="checkout-item-row">
                    <td className="checkout-item-cell">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="checkout-item-image"
                      />
                    </td>
                    <td className="checkout-item-cell checkout-item-title">
                      {item.title}
                    </td>
                    <td className="checkout-item-cell checkout-item-price">
                      ${item.price}
                    </td>
                    <td className="checkout-item-cell checkout-item-quantity">
                      x{item.quantity}
                    </td>
                    <td className="checkout-item-cell checkout-item-total">
                      ${item.quantity * item.price}
                    </td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td colSpan="4" className="checkout-item-cell total-label">
                    <b>Total</b>
                  </td>
                  <td className="checkout-item-cell total-cell">
                    <b>${getCartTotal()}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {loading && <p className="checkout-loading">Generando orden...</p>}
          {error && <p className="checkout-error">{error}</p>}
        </section>
      </>
    );
  }
};

export default Checkout;
