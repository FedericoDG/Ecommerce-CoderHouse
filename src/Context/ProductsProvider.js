import React, { useState, useEffect } from 'react';
import Context from './Context';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const productos = await getDocs(collection(db, 'products'));
      let aux = [];
      productos.docs.forEach(product => {
        aux.push(product.data());
      });
      setAllProducts(aux);
    };
    getData();
  }, []);

  return (
    <Context.Provider value={{allProducts}}>
      {children}
    </Context.Provider>
  );
};