import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import ItemList from "../ItemList/ItemList.js";
import Spinner from "../Spinner/Spinner";

import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
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
    };
    getProducts();
  }, [categoryId]);
  return (
    <div className="itemListContainer">
      {
        products.length > 0 ?
          <ItemList products={products} />
          :
          <Spinner />
      }
    </div>
  );
};

export default ItemListContainer;
