import Item from "../Item/Item";

const ItemList = ({ list }) => {
  return (
    <>
      {list.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </>
  );
};

export default ItemList;
