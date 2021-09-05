import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContex } from '../Context/CartProvider';
import ItemCount from "../ItemCount/ItemCount";
import Back from "../Back/Back";
import "./ItemDetail.scss";

const ItemDetail = ({ product }) => {
  const [border, setBorder] = useState(1);
  const [add, setAdd] = useState(false);
  const [imageBig, setImageBig] = useState(product.image1);
  useEffect(() => { setImageBig(product.image1); }, [product]);
  const handleBorder = (e) => {
    if (e.target.nextSibling) {
      if (e.target.nextSibling.nextSibling) {
        setBorder(1);
      } else {
        setBorder(2);
      }
    } else {
      setBorder(3);
    }
  };
  const handleImage = (e) => {
    setImageBig(e.target.src);
  };
  const { addProduct } = useContext(CartContex);
  const onAdd = (count) => {
    setAdd(true);
    addProduct({
      id: product.id,
      name: product.name,
      img: product.image1,
      count,
      price: product.price,
      stock: product.stock,
    });
  };
  return (
    <>
      <Back />
      <div className="itemDetail">
        <div className="container">
          <div className="thumbs">
            <img className={border === 1 ? "border" : null} src={product.image1} alt={product.title} onClick={(e) => { handleImage(e); handleBorder(e); }} />
            <img className={border === 2 ? "border" : null} src={product.image2} alt={product.title} onClick={(e) => { handleImage(e); handleBorder(e); }} />
            <img className={border === 3 ? "border" : null} src={product.image3} alt={product.title} onClick={(e) => { handleImage(e); handleBorder(e); }} />
          </div>
          <div className="imageBig">
            <img src={imageBig} alt={product.title} />
          </div>
          <div className="details">
            <div className="info">
              <h1>{product.name}</h1>
              <h2>{product.category}</h2>
              <p>{product.description_long}</p>
            </div>
            {
              !add
                ? <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                :
                <div className="continueOrEnd">
                  <Link className="Link" to='/cart'>
                    <button>Ir al carrito</button>
                  </Link>
                  <Link className="Link" to='/'>
                    <button className="continue">Continuar comprando</button>
                  </Link>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
