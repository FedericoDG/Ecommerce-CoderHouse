import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebaseConfig';

import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spiner/Spinner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const product = (await db.collection('products').doc(id).get()).data();
        setProduct({ ...product, id });
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [id]);

  return (
    <>
      {
        product.name ?
          <div className="ContainerDetail">
            <ItemDetail product={product} />
          </div>
          :
          <Spinner />
      }
    </>
  );
};

export default ItemDetailContainer;
