import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Products list</h2>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
