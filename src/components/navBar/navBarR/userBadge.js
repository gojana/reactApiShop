import { Link } from 'react-router-dom';
import useComponentVisible from '../../../hooks/useComponentVisible';

const UserBadge = (props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onClickHandler = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div className="dropdown dropdown-end" ref={ref}>
      <label
        tabIndex="0"
        className="btn btn-ghost btn-circle avatar"
        onClick={onClickHandler}
      >
        <div className="w-10 rounded-full">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/api/v1/userResources/${props.photo}`}
            alt=""
          />
        </div>
      </label>
      <ul
        tabIndex="0"
        className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52 text-white ${
          isComponentVisible ? 'visible' : 'hidden'
        }`}
      >
        <Link className="justify-between link-hover" to="/profile">
          Perfil
        </Link>
        <Link to="/login" className="justify-between link-hover">
          mis compras
        </Link>
        <Link to="/login" className="justify-between link-hover">
          mis reviews
        </Link>
        <Link
          to="/login"
          className="justify-between link-hover"
          onClick={props.logout}
        >
          Logout
        </Link>
      </ul>
    </div>
  );
};
export default UserBadge;
