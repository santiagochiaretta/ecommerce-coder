import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

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

  return (
    <div className="item-count">
      <p>Stock:{stock}</p>
      <div>
        <button onClick={decrement} disabled={count == initial} className="btn">
          -
        </button>
        <span className="count-quantity">{count}</span>
        <button onClick={increment} disabled={count == stock} className="btn">
          +
        </button>
      </div>
      <button onClick={() => onAdd(count)} className="btn">Agregar</button>
    </div>
  );
};

export default ItemCount;
