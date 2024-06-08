import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const resultQuery = categoryId
      ? query(itemsCollection, where("category", "==", categoryId))
      : itemsCollection;
    getDocs(resultQuery).then((snapShot) => {
      if (snapShot.size > 0) {
        setItems(
          snapShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
        setLoading(false);
      } else {
        console.log("No existen documentos");
        setItems([]);
      }
    });
  }, [categoryId]);

  return (
    <section className="list-container">
      {loading ? <Loader /> : <ItemList list={items} />}
    </section>
  );
};

export default ItemListContainer;
