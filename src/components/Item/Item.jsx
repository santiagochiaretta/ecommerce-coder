const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <div className="item-detail">
        <h3>{item.name}</h3>
        <p>Price: {item.price}€</p>
      </div>
    </div>
  );
};

export default Item;
