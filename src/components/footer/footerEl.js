import { Link } from 'react-router-dom';

const FooterEl = (props) => {
  return (
    <div>
      <span className="footer-title ">{props.title}</span>
      <Link className="link link-hover" to="/welcome">
        Quienes Somos?
      </Link>
      <Link className="link link-hover" to="/welcome">
        Contacto
      </Link>
      <Link className="link link-hover" to="/welcome">
        Politicas de Devolucion
      </Link>
    </div>
  );
};
export default FooterEl;
