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
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setTitle('');
    setSubtitle('');
    (async function () {
      try {
        let products = await db.collection('products').get();
        const docs = [];
        products.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        if (categoryId === undefined) {
          setProducts(docs);
          setTitle('Todos los líquidos');
          setSubtitle(`${docs.length} productos`);
        } else {
          const filter = docs.filter(item => item.category === categoryId)
          setProducts(filter);
          setTitle(`Líquidos ${categoryId}`);
          setSubtitle(`${filter.length} productos`);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  return (
    <>
      <div className="title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
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
    </>
  );
};

export default ItemListContainer;
