import useComponentVisible from '../../../hooks/useComponentVisible';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Carrito = (props) => {
  
  const cartProductQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartTotalPrice = useSelector((state) => state.cart.totalAmount);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const onClickHandler = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <div className="dropdown dropdown-end pl-3 pr-2" ref={ref}>
      <label
        tabIndex="0"
        className="btn btn-ghost btn-circle"
        onClick={onClickHandler}
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm badge-primary indicator-item">
            {cartProductQuantity}
          </span>
        </div>
      </label>

      <div
        tabIndex="0"
        className={`mt-3 card card-compact dropdown-content ${
          isComponentVisible ? 'visible' : 'hidden'
        } w-52 bg-base-100 shadow`}
      >
        <div className="card-body">
          <span className="font-bold text-lg">{`${cartProductQuantity} items`}</span>
          <span className="">Subtotal: ${cartTotalPrice}</span>
          <div className="card-actions">
            <Link className="btn btn-primary btn-block" to={'/cart'}>
              Ver carrito
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carrito;
