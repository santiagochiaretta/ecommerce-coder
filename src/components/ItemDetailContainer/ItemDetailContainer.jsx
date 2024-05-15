import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import productsJson from "../../data/productsData.json";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = (productList) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (productList[1]) {
            resolve(productList[1]);
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
    <section>
      {product ? <ItemDetail item={product} /> : <p>Searching...</p>}
    </section>
  );
};

export default ItemDetailContainer;
