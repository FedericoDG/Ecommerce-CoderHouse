import React, { useState } from 'react';
import Context from './Context'

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addProduct = (itemCount) => {
    if (cartItems.find((item) => item.id === itemCount.id)) {
      const newCartItem = cartItems.map((item) => {
        if (item.id === itemCount.id) {
          item = { ...item, count: item.count + itemCount.count };
        }
        return item;
      });
      setCartItems(newCartItem);
    } else {
      setCartItems((state) => {
        return [...state, itemCount];
      });
    }
  };

  const deleteProduct = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const totalCost = () => {
    return cartItems.reduce((acumulador, item) => acumulador + item.price * item.count, 0);
  };
  const totalAmount = () => {
    return cartItems.reduce((acumulador, item) => acumulador + item.count, 0);
  };
  const resetCantCart = () => {
    setCartItems([]);
  };

  return (
    <Context.Provider value={{ cartItems, setCartItems, addProduct, deleteProduct, totalCost, totalAmount, resetCantCart }}>
      {children}
    </Context.Provider>
  );
};