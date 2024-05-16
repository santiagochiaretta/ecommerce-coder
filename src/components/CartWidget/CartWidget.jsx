import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <Link to={"/cart"}>
        <FaOpencart className="cart-icon" />
      </Link>

      <span className="cart-number">0</span>
    </div>
  );
};

export default CartWidget;
