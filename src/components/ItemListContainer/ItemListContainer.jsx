import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="list-container">
      <h1>{greeting}</h1>
    </section>
  );
};

export default ItemListContainer;
