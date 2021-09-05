import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="Link" to='/'><h1>Adams Vape</h1></Link>
      <ul>
        <li><NavLink className="Link" to='/category/importados' activeClassName="active">importados</NavLink></li>
        <li><NavLink className="Link" to='/category/shibumi'>shibumi</NavLink></li>
        <li><NavLink className="Link" to='/category/mhv'>mhv</NavLink></li>
        <CartWidget />
      </ul>
    </div>
  );
};

export default Header;
