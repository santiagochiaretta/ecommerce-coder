import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      <h2 className="item-list-title">Products list</h2>
      <div className="item-list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
