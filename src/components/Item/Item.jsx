import { Link } from "react-router-dom";
import { CgMoreO } from "react-icons/cg";

const Item = ({ id, image, title, price }) => {
  return (
    <article className="card-item">
      <Link to={"/item/" + id}>
        <img src={image} alt={title} className="card-item-img" />
      </Link>
      <div className="item-info">
        <h3 className="item-info-title">{title}</h3>
        <p className="item-info-price">${price}</p>
        <Link to={"/item/" + id}>
          <CgMoreO title="Ver más" className="item-info-icon" />
        </Link>
      </div>
    </article>
  );
};

export default Item;
