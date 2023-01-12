import { Link } from 'react-router-dom';
const MenuItems = (props) => {
  return (
    <li>
      <Link to={`${props.route}`}>{props.name}</Link>
    </li>
  );
};
export default MenuItems;
