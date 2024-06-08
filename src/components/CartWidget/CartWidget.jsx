import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";

const CartWidget = () => {
  const { getCartCount } = useContext(CartContext);

  if (getCartCount() > 0) {
    return (
      <div className="cart-widget">
        <Link to={"/cart"}>
          <FaOpencart className="cart-widget-icon" />
        </Link>
        <span title={`${getCartCount()} productos`} className="cart-widget-number">{getCartCount()}</span>
      </div>
    );
  } else {
    return (
      <div className="cart-widget">
        <Link to={"/cart"}>
          <FaOpencart className="cart-widget-icon" />
        </Link>
      </div>
    );
  }
};

export default CartWidget;
