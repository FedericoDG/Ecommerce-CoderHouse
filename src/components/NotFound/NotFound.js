import sad from './sad.svg';
import './NotFound.scss';

const NotFound = ({ title }) => {
  return (
    <div className="notFound">
      <img src={sad} alt="Sad Face" />
      <h1 className="notExist">{title}</h1>
    </div>
  );
};

export default NotFound;
