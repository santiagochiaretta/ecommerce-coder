import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [visible, setVisible] = useState(true);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    if (count <= stock) {
      onAdd(count);
      setCount(initial);
      setVisible(false);
    }
  };

  return (
    <div className="item-count">
      {visible ? (
        <>
          <p>(Stock:{stock})</p>
          <div>
            <button
              onClick={decrement}
              disabled={count == initial}
              className="btn"
            >
              -
            </button>
            <span className="count-quantity">{count}</span>
            <button
              onClick={increment}
              disabled={count == stock}
              className="btn"
            >
              +
            </button>
          </div>
          <button type="button" className="btn" onClick={addToCart}>
            Agregar
          </button>
        </>
      ) : (
        <Link to={"/cart"} className="btn">
          Ver carrito
        </Link>
      )}
    </div>
  );
};

export default ItemCount;
