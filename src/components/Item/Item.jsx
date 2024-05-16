import { Link } from "react-router-dom";

const Item = ({ id, title, category, price }) => {
  return (
    <article className="card-item">
      <div>
        <img src="" alt="card-img" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{category}</p>
        <p>$ {price}</p>
        <Link to={`/item/${id}`} className="btn">
          View More
        </Link>
      </div>
    </article>
  );
};

export default Item;
