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
    <div>
      <p>Stock: {stock}</p>
      <div>
        <button onClick={decrement} disabled={count == initial}>
          -
        </button>
        <span>Selection: {count}</span>
        <button onClick={increment} disabled={count == stock}>
          +
        </button>
      </div>
      <button onClick={() => onAdd(count)}>Agregar</button>
    </div>
  );
};

export default ItemCount;
