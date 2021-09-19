import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebaseConfig';

import ItemDetail from "../ItemDetail/ItemDetail";
import NotFound from "../NotFound/NotFound";
import Spinner from "../Spinner/Spinner";

import './ItemDetailContainer.scss';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const product = (await db.collection('products').doc(id).get()).data();
        setProduct({ ...product, id });
        setLoading(!loading);
      } catch (error) {
        console.log('catch');
      }
    };
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="ContainerDetail">
      {
        loading ?
          <Spinner />
          :
          product.name ?
          <ItemDetail product={product} />
          :
          <NotFound title="Producto no encontrado."/>
      }
    </div>
  );
};

export default ItemDetailContainer;
