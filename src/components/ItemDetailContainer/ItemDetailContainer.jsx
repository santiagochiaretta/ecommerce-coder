import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    getDoc(docRef).then((snapShot) => {
      if (snapShot.exists()) {
        setItem({ id: snapShot.id, ...snapShot.data() });
        setLoading(false);
      } else {
        console.log("Producto no encontrado");
        setItem({});
      }
    });
  }, [id]);

  return (
    <section className="detail-container">
      {loading ? <p>Buscando...</p> : <ItemDetail item={item} />}
    </section>
  );
};

export default ItemDetailContainer;
