import facebook from './facebook.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p><span>&copy;</span> Adams Vape 2021</p>
      </div>
      <div className="icons" >
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
    </footer>
  );
};

export default Footer;
