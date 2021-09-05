import React, { useState, createContext } from 'react';

//1 - CREAR EL CONTEXTO
export const CartContex = createContext();

// 2 - CREAR EL COMPONENTE PROVIDER
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

  // 3 - RETORNAMOS NUESTO CONTEXT CON .PROVIDER
  return (
    <CartContex.Provider value={{ cartItems, setCartItems, addProduct, deleteProduct, totalCost, totalAmount, resetCantCart }}>
      {children}
    </CartContex.Provider>
  );
};