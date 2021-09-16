import { useState } from 'react';

import './ItemCount.scss';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
    {
      stock > 0 ?
      <div className="ItemCount">
        <div className="quantity">
          <button onClick={handleDecrement}>-</button><input type="text" inputMode="numeric" readOnly value={count}></input><button onClick={handleIncrement}>+</button>
        </div>
        <div className="add">
          <button onClick={() => onAdd(count)}>agregar</button>
        </div>
      </div>
      :
      <p>Producto sin stock</p>
    }
    </>
  );
};

export default ItemCount;