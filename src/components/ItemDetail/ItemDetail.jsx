import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (quantity) => {
    addItem(item, quantity);
  };

  return (
    <article className="card-item-detail">
      <div>
        <img src={item.image} alt={item.title} className="card-item-img" />
      </div>
      <div className="item-info">
        <h3 className="item-info-title">{item.title}</h3>
        <p className="item-info-description">{item.description}</p>
        <p className="item-info-price">${item.price}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
};

export default ItemDetail;
