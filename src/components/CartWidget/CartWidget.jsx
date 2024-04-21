import { FaOpencart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaOpencart className="cart-icon" />
      <span className="cart-number">0</span>
    </div>
  );
};

export default CartWidget;
