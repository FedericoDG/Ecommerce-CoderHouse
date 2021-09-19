import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/Context';

import cart from "./cart.svg";
import "./CartWidget.scss";

const CartWidget = () => {
  const { totalAmount } = useContext(CartContext);
  
  return (
    <Link className="cartW" to="/cart">
      <img src={cart} alt="cart icon" />
      {
        totalAmount() > 0 && <div className="circle">{totalAmount()}</div>
      }
    </Link>
  );
};

export default CartWidget;
