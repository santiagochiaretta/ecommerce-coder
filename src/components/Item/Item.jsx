import { Link } from "react-router-dom";

const Item = ({ id, image, title, price }) => {
  return (
    <article className="card-item">
      <div>
        <img src={image} alt="card-img" className="item-img"/>
      </div>
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-price">${price}</p>
        <Link to={`/item/${id}`} className="btn">
          Ver detalles
        </Link>
      </div>
    </article>
  );
};

export default Item;
