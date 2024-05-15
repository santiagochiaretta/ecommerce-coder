const Item = ({ title, category, price }) => {
  return (
    <article className="card-item">
      <h3>{title}</h3>
      <p>{category}</p>
      <span>$ {price}</span>
    </article>
  );
};

export default Item;
