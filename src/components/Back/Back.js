import { Link } from 'react-router-dom';

import back from "./back.svg";
import "./Back.scss";

const Back = () => {
  return (
      <Link className="back" to="/">
        <img src={back} alt="volver" />
        <p>volver</p>
      </Link>
  );
};

export default Back;
