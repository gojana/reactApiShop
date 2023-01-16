import { Link } from 'react-router-dom';
import useComponentVisible from '../../../hooks/useComponentVisible';

const HamburgerM = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleClick = (event) => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div className="dropdown" ref={ref}>
      <div className="lg:hidden md:hidden">
        {
          <button
            type="button"
            className={`z-40 block hamburger focus:outline-none mt-2 sm:-mr-2 ${
              isComponentVisible ? 'open' : ''
            }`}
            onClick={handleClick}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        }
      </div>
      <ul
        tabIndex="0"
        className={`dropdown-content menu p-2 shadow bg-neutral text-white rounded-box w-25 ${
          isComponentVisible ? 'active' : 'hidden'
        }`}
      >
        <li>
          <Link to="/products">Productos</Link>
        </li>
        <li>
          <Link to="/welcome">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default HamburgerM;
