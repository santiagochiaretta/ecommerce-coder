import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <Route exact path="/" element={<ItemListContainer />} />
<Route exact path="/products" element={<ItemListContainer />} /> */
}
