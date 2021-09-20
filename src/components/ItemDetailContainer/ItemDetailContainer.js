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
    (async function () {
      try {
        const product = (await db.collection('products').doc(id).get()).data();
        setProduct({ ...product, id });
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
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
            <NotFound title="Producto no encontrado." />
      }
    </div>
  );
};

export default ItemDetailContainer;
