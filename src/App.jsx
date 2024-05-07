import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/products" element={<ItemListContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
