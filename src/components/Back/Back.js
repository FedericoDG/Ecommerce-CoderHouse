import { Link } from 'react-router-dom';
import "./Back.scss";
import back from "./back.svg";

const Back = () => {
  return (
      <Link className="back" to="/">
        <img src={back} alt="volver" />
        <p>volver</p>
      </Link>
  );
};

export default Back;
