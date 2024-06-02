import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
  const { cart, getCartCount, getCartTotal } = useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState("");

  const generateOrder = () => {
    const buyer = { name: name, email: email, phone: phone };
    const items = cart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
    }));
    const order = { buyer: buyer, items: items, total: getCartTotal() };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((data) => {
      setOrderId(data.id);
    });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <form>
          <div>
            <label>Nombre</label>
            <input
              type="text"
              onInput={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              onInput={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Teléfono</label>
            <input
              type="number"
              onInput={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
          <button type="button" className="btn" onClick={generateOrder}>
            Generar Orden
          </button>
        </form>
      </div>
      <div className="checkout-items">
        <table>
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
      <div>
        {orderId ? (
          <p>
            Felicitaciones! Tu orden de compra es: <b>{orderId}</b>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Checkout;
