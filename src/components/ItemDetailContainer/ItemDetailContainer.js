import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/data.json", { mode: "no-cors" })
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.data.find((item) => item.id === Number(id)));
      });
  }, [id]);
  return (
    <div className="ContainerDetail">
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
