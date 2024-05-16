import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

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
        <p>$ {item.price}</p>
        {quantity ? (
          <Link to={"/cart"}>Ver {quantity} productos en carrito</Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </article>
  );
};

export default ItemDetail;
