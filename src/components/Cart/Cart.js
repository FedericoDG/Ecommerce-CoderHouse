import { useContext, useState, useEffect } from 'react';
import CartContext from '../../Context/Context';
import { db } from '../../firebase/firebaseConfig';
import Back from '../Back/Back';

import "./Cart.scss";

const Cart = () => {
  const { cartItems, deleteProduct, totalCost, resetCantCart } = useContext(CartContext);
  const [buyer, setbuyer] = useState({});
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('');

  useEffect(() => {
    const aux = [];
    cartItems.forEach(element => {
      aux.push({ id: element.id, name: element.name, count: element.count, price: element.price });
    });
    setItems(aux);
  }, [cartItems]);

  const onChange = (e) => {
    if (e.target.name === 'name') {
      setbuyer({ ...buyer, name: e.target.value });
    } else if (e.target.name === 'phone') {
      setbuyer({ ...buyer, phone: e.target.value });
    } else if (e.target.name === 'email') {
      setbuyer({ ...buyer, email: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const object = {
      buyer,
      items: [...items],
      total: totalCost(),
      date: date.getUTCDate() + '/' + (date.getUTCMonth() + 1) + '/' + date.getUTCFullYear()
    };
    const newOrder = await db.collection("orders").add(object);
    setOrder(newOrder.id);
    await Promise.all(items.map(async (element) => {
      try {
        const doc = await db.collection('products').doc(element.id).get();
        const stock = doc.data().stock;
        await db.collection("products").doc(element.id).update({ stock: stock - element.count });
      } catch (error) {
        console.log(error);
      }
    }));
    resetCantCart();
    console.log('Documento escrito en Firestore:', object);
    console.log('ID del documento:', newOrder.id);
  };

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
                            {
                              !order &&
                              <span onClick={() => deleteProduct(product.id)}>Quitar</span>
                            }
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
              {
                !order &&
                <div className="removeAll" onClick={resetCantCart}>Quitar todos los productos</div>
              }
              <div className="total">
                <span className="title">Total</span>
                <span className="price">${(totalCost())}</span>
              </div>
              <form onSubmit={onSubmit}>
                <div className="fields">
                  <h1>Complete con su datos</h1>
                  <input type="text" name="name" placeholder="nombre" required onChange={onChange} />
                  <input type="text" name="phone" placeholder="teléfono" required onChange={onChange} />
                  <input type="email" name="email" placeholder="email" required onChange={onChange} />
                </div>
                <div className="buy">
                  <button>finalizar</button>
                </div>
              </form>
            </div>
            :
            order ?
              <div className="order">
                <h2>¡Gracias por comprar!</h2>
                <h3>Su número de orden es: <span>{order}</span></h3>
              </div>
              :
              <div className="order">
                <p>Carrito vacío (luego pongo acá alguna imagen o texto...)</p>
              </div>
        }
      </div>
    </>
  );
};

export default Cart;
