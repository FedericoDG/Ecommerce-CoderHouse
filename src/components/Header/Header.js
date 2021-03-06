import { Link, NavLink } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

import logo from './logo.png';
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="Link" to='/'>
      <img src={logo} alt="logo" />
        <h1>Adam's Vape</h1>
      </Link>
      <ul>
        <li><NavLink className="Link" to='/category/importados' activeClassName="active">importados</NavLink></li>
        <li><NavLink className="Link" to='/category/shibumi'>shibumi</NavLink></li>
        <li><NavLink className="Link" to='/category/mvh'>mvh</NavLink></li>
        <CartWidget />
      </ul>
    </div>
  );
};

export default Header;
