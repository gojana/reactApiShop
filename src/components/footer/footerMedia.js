import { Link } from 'react-router-dom';

const FooterMedia = (props) => {
  return (
    <div>
      <span className="footer-title">{props.title}</span>
      <div className="grid grid-flow-col gap-4">
        <Link className="link hover:-translate-y-1 hover:scale-150  duration-300" to="/welcome">{props.comp1}</Link>
        <Link className="link hover:-translate-y-1 hover:scale-150  duration-300" to="/welcome">{props.comp2}</Link>
        <Link className="link hover:-translate-y-1 hover:scale-150  duration-300" to="/welcome">{props.comp3}</Link>
      </div>
    </div>
  );
};
export default FooterMedia;
