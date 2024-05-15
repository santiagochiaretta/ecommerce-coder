import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantityToAdd) => {
    setQuantity(quantityToAdd);
  };

  return (
    <article className="card-item-detail">
      <div>
        <img src="" alt="card-img" />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span>$ {item.price}</span>
        {quantity ? (
          <a href="/#">Ver {quantity} productos en carrito</a>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </article>
  );
};

export default ItemDetail;
