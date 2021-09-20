import alert from './404.svg';
import './Error404.scss';

const Error404 = () => {
  return (
    <div className="error404">
      <img src={alert} alt="Alert" />
      <h1>Error 404</h1>
    </div>
  );
};

export default Error404;
