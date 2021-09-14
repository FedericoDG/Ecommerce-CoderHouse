import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const getData = async () => {
      const productos = await getDocs(query(collection(db, 'products')));
      let aux = [];
      productos.docs.forEach(product => {
        aux.push({...product.data(), id: product.id});
      });
      if (categoryId === undefined) {
        setProducts(aux);
      } else {
        setProducts(aux.filter(item => item.category === categoryId));
      }
    };
    getData();
  }, [categoryId]);
  return (
    <div className="itemListContainer">
    {
      products.length > 0 ?
      <ItemList products={products} />
      :
      <p>Cargando...</p>
    }
    </div>
  );
};

export default ItemListContainer;
