import { Link } from 'react-router-dom';

const ButtonGeneric = (props) => {
  return (
    <Link
      className={`${props.css} btn btn-primary  text-white`}
      to={`/${props.route}`}
      onClick={props.action}
    >
      {props.name}
    </Link>
  );
};

export default ButtonGeneric;
