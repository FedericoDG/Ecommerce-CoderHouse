import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';

import ItemList from "../ItemList/ItemList.js";
import NotFound from "../NotFound/NotFound";
import Spinner from "../Spinner/Spinner";

import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      let products = await db.collection('products').get();
      const docs = [];
      products.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      if (categoryId === undefined) {
        setProducts(docs);
      } else {
        setProducts(docs.filter(item => item.category === categoryId));
      }
      setLoading(false);
    };
    getProducts();
  }, [categoryId]);

  return (
      <div className="itemListContainer">
        {
          loading ?
            <Spinner />
            :
            products.length > 0 ?
              <ItemList products={products} />
              :
              <NotFound title="Categoría no encontrada" />
        }
      </div>
  );
};

export default ItemListContainer;
