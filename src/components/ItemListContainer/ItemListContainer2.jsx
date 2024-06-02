import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer2 = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  //   useEffect(() => {
  //     const db = getFirestore();
  //     const docRef = doc(db, "items", "3bLzHAXFHQYz3OjBu2EI");
  //     getDoc(docRef).then((snapShot) => {
  //       if (snapShot.exists()) {
  //         console.log(snapShot.id);
  //         console.log(snapShot.data());
  //         setItems([{ id: snapShot.id, ...snapShot.data() }]);
  //         setLoading(false);
  //       } else {
  //         console.log("No existe el documento");
  //       }
  //     });
  //   }, []);

  //   useEffect(() => {
  //     const db = getFirestore();
  //     const itemsCollection = collection(db, "items");
  //     getDocs(itemsCollection).then((snapShot) => {
  //       console.log(snapShot);
  //       if (snapShot.size > 0) {
  //         console.log("Existen documentos");
  //         console.log(snapShot.docs);
  //         setItems(
  //           snapShot.docs.map((item) => ({ id: item.id, ...item.data() }))
  //         );
  //         setLoading(false);
  //       } else {
  //         console.log("No existen documentos");
  //       }
  //     });
  //   }, []);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const resultQuery = query(
      itemsCollection,
      where("category", "==", `${categoryId}`)
    );
    getDocs(resultQuery).then((snapShot) => {
      console.log(snapShot);
      if (snapShot.size > 0) {
        console.log("Existen documentos");
        console.log(snapShot.docs);
        setItems(
          snapShot.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
        setLoading(false);
      } else {
        setItems([]);
        console.log("No existen documentos");
      }
    });
  }, [categoryId]);

  return (
    <section className="list-container">
      {loading ? <p>Cargando...</p> : <ItemList list={items} />}
    </section>
  );
};

export default ItemListContainer2;
