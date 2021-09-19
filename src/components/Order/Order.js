import './Order.scss';

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>¡Gracias por comprar!</h2>
      <h3>Su número de orden es: <span>{order}</span></h3>
    </div>
  );
};

export default Order;
