import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import productsJson from "../../data/productsData.json";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = (productList) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (productList.length) {
            categoryId
              ? resolve(
                  productList.filter((prod) => prod.category === categoryId)
                )
              : resolve(productList);
          } else {
            reject("Error");
          }
        }, 2000);
      });

    getProducts(productsJson)
      .then((res) => setProducts(res))
      .catch((err) => console.log(`${err} : No products found`));
  }, [categoryId]);

  return (
    <section className="list-container">
      {products.length ? <ItemList list={products} /> : <p>Cargando...</p>}
    </section>
  );
};

export default ItemListContainer;
