import { useContext } from 'react';
import { CartContex } from '../Context/CartProvider';
import Back from '../Back/Back';
import "./Cart.scss";

const Cart = () => {
  const { cartItems, deleteProduct, totalCost, resetCantCart } = useContext(CartContex);
  return (
    <>
      <Back />
      <div className="cart">
        <h1>Carrito de compras</h1>
        {
          cartItems.length > 0
            ?
            <div className="container">
              <div className="head">
                <div className="product">producto</div>
                <div className="price">precio</div>
                <div className="quantity">cantidad</div>
                <div className="subtotal">subtotal</div>
              </div>
              <div className="products">
                {
                  cartItems.map(product => {
                    return (
                      <div className="row" key={product.id}>
                        <div className="item">
                          <div className="image">
                            <img src={product.img} alt={product.name}></img>
                          </div>
                          <div className="info">
                            <h2>{product.name}</h2>
                            <span onClick={() => deleteProduct(product.id)}>Quitar</span>
                          </div>
                        </div>
                        <div className="price">${product.price}</div>
                        <div className="amount">{product.count}</div>
                        <div className="subtotal">${product.price * product.count}</div>
                      </div>
                    );
                  })
                }
              </div>
              <div className="removeAll" onClick={resetCantCart}>Quitar todos los productos</div>
              <div className="total">
                <span className="title">Total</span>
                <span className="price">${(totalCost())}</span>
              </div>
              <div className="buy">
                <button>finalizar</button>
              </div>
            </div>
            :
            <p>Carrito vacío (luego pongo acá alguna imagen o texto...)</p>
        }
      </div>
    </>
  );
};

export default Cart;
