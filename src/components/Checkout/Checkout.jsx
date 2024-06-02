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
    const order = { buyer, items, total: getCartTotal() };
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
        <p className="checkout-empty-message">No hay nada por aquí</p>
        <Link to={"/"} className="checkout-home-link">
          Volver a la página principal
        </Link>
      </section>
    );
  } else {
    return (
      <>
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
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} width={32} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>x{item.quantity}</td>
                  <td>${item.quantity * item.price}</td>
                </tr>
              ))}
              <tr>
                <td>
                  <b>Total</b>
                </td>
                <td>
                  <b>${getCartTotal()}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {loading && <p className="checkout-loading">Generando orden...</p>}
        {error && <p className="checkout-error">{error}</p>}
      </>
    );
  }
};

export default Checkout;
