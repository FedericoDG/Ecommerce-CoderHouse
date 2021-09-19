import empty from './empty.svg';
import './EmptyCart.scss';

const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <img src={empty} alt="Empty Cart" />
      <p>Carrito vacío... Agrega algún producto!</p>
    </div>
  );
};

export default EmptyCart;
