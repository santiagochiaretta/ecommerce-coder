import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const fetchItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          imageUrl: "https://picsum.photos/200",
          name: "Product 1",
          price: 10,
        },
        {
          id: 2,
          imageUrl: "https://picsum.photos/200",
          name: "Product 2",
          price: 20,
        },
        {
          id: 3,
          imageUrl: "https://picsum.photos/200",
          name: "Product 3",
          price: 30,
        },
        {
          id: 4,
          imageUrl: "https://picsum.photos/200",
          name: "Product 4",
          price: 40,
        },
        {
          id: 5,
          imageUrl: "https://picsum.photos/200",
          name: "Product 5",
          price: 50,
        },
      ]);
    }, 3000);
  });
};

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <section className="list-container">
      <h1>¡Welcome to VirtualStore!</h1>
      {loading ? <p>Loading...</p> : <ItemList items={items} />}
    </section>
  );
};

export default ItemListContainer;
