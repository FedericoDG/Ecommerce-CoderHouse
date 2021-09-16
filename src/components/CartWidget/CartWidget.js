import { useContext } from 'react';
import CartContext from '../../Context/Context';
import { Link } from 'react-router-dom';

import "./CartWidget.scss";
import cart from "./cart.svg";

const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);

  return (
    <Link className="cart" to="/cart">
      <img src={cart} alt="cart icon" />
      {
        totalAmount() > 0 && <div className="circle">{totalAmount()}</div>
      }
    </Link>
  );
};

export default CartWidget;
