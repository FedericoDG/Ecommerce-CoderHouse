import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const productos = await getDocs(query(collection(db, 'products')));
      let aux = [];
      productos.docs.forEach(product => {
        aux.push({...product.data(), id: product.id});
      });
      setProduct(aux.find(item => item.id === id));
    };
    getData();
  }, [id]);

  return (
    <div className="ContainerDetail">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
