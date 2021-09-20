import { useContext, useState, useEffect } from 'react';
import CartContext from '../../Context/Context';
import { db } from '../../firebase/firebaseConfig';

import Back from '../Back/Back';
import BuyForm from '../BuyForm/BuyForm';
import CartItem from '../CartItem/CartItem';
import EmptyCart from '../EmptyCart/EmptyCart';
import Order from '../Order/Order';
import Spinner from '../Spinner/Spinner';

import "./Cart.scss";

const Cart = () => {
  const { cartItems, deleteProduct, totalCost, resetCantCart } = useContext(CartContext);
  const [buyer, setbuyer] = useState({ name: '', phone: '', email: '', repeat_email: '' });
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('');
  const [loading, setLoading] = useState(false);

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
    } else if (e.target.name === 'repeatEmail') {
      setbuyer({ ...buyer, repeat_email: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    setLoading(false);
    console.log('Documento escrito en Firestore:', object);
    console.log('ID del documento:', newOrder.id);
  };

  return (
    <div className="cart">
      {
        loading ?
          <Spinner />
          :
          <>
            <Back />
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
                  {
                    cartItems.map(product => {
                      return (
                        <CartItem product={product} deleteProduct={deleteProduct} key={product.id} />
                      );
                    })
                  }
                  <div className="removeAll" onClick={resetCantCart}>Quitar todos los productos</div>
                  <div className="total">
                    <span className="title">Total</span>
                    <span className="price">${(totalCost())}</span>
                  </div>
                  <BuyForm onSubmit={onSubmit} onChange={onChange} buyer={buyer} />
                </div>
                :
                order ?
                  <Order order={order} />
                  :
                  <EmptyCart />
            }
          </>
      }
    </div>
  );
};

export default Cart;
