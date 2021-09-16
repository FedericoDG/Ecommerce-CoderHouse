import { Link } from "react-router-dom";

import lupa from "./lupa.svg";
import "./Item.scss";

const Item = ({ product }) => {
  return (
    <div className="card">
      <h1>{product.name}</h1>
      <h2>{product.category}</h2>
      <div className="image">
        <img src={product.image1} alt={product.name} />
        <Link className="overlay" to={`/item/${product.id}`}>
          <img src={lupa} alt="lupa" />
          <span>ver más</span>
        </Link>
      </div>
      <h3>$ {product.price}</h3>
      {
        product.new && <span className="badge nuevo">nuevo</span>
      }
      {
        product.discount && <span className="badge oferta">oferta</span>
      }
      {
        product.stock === 0 && <span className="badge agotado">agotado</span>
      }
    </div>
  );
};

export default Item;
