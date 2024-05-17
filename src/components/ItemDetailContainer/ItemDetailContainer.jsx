import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productsJson from "../../data/productsData.json";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const getProduct = (productList) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (productList.length) {
            resolve(productList.find((prod) => prod.id === itemId));
          } else {
            reject("Error");
          }
        }, 2000);
      });

    getProduct(productsJson)
      .then((res) => setProduct(res))
      .catch((err) => console.log(`${err} : There is no product`));
  }, []);

  return (
    <section className="detail-container">
      {product ? <ItemDetail item={product} /> : <p>Buscando...</p>}
    </section>
  );
};

export default ItemDetailContainer;
