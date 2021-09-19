import './CartItem.scss'

const CartItem = ({product, deleteProduct}) => {
  return (
    <div className="products">
      <div className="row">
        <div className="item">
          <div className="image">
            <img src={product.img} alt={product.name}></img>
          </div>
          <div className="info">
            <h2>{product.name}</h2>
              <span onClick={() => deleteProduct(product.id)}>Quitar</span>
          </div>
        </div>
        <div className="price">${product.price}</div>
        <div className="amount">{product.count}</div>
        <div className="subtotal">${product.price * product.count}</div>
      </div>
    </div>
  );
};

export default CartItem;
