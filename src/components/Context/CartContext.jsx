import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      const newProduct = cart.find((product) => product.id === item.id);
      newProduct.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const removeItem = (id) => {
    const items = cart.filter((item) => item.id !== id);
    setCart([...items]);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const getCartCount = () => {
    return cart.reduce((acc, item) => (acc += item.quantity), 0);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, item) => (acc += item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, getCartCount, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
