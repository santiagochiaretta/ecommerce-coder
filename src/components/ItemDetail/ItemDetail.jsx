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
        <img src={item.image} alt="card-img" className="item-detail-img"/>
      </div>
      <div className="item-info">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-description">{item.description}</p>
        <p className="item-price">${item.price}</p>
        {quantity ? (
          <Link to={"/cart"} className="btn">Ver {quantity} productos en carrito</Link>
        ) : (
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </article>
  );
};

export default ItemDetail;
