import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList.js";
import "./ItemListContainer.scss"

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    fetch("http://localhost:3000/data.json", { mode: "no-cors" })
      .then((response) => response.json())
      .then((json) => {
        if (categoryId === undefined) {
          setProducts(json.data); 
        }else{
          setProducts(json.data.filter(item => item.category === categoryId));
        }
      });
  }, [categoryId]);
  return (
    <div className="itemListContainer">
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
