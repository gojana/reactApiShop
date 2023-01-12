import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cart-slice';
import { notificationActions } from '../../redux/slices/notification-slice';
import { CartIcon } from '../icons/icons';
import { SpinningLoadingIcon } from '../icons/icons';

function FeaturedProdItem(props) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const addProductToCartHandler = () => {
    try {
      setIsLoading(true);
      dispatch(
        cartActions.addItemToCart({
          itemId: props.id,
          name: props.nameProd,
          img: props.imgProd,
          price: props.price,
        })
      );
      dispatch(
        notificationActions.showNotification({
          message: `producto: ${props.nameProd} agregado al carrito!`,
          type: 'alert-success',
        })
      );
      setIsLoading(false);
    } catch (err) {
      dispatch(
        notificationActions.showNotification({
          message: `${err}`,
          type: 'alert-error',
        })
      );
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`w-auto h-auto rounded-lg shadow-md bg-neutral border border-primary`}
    >
      <Link className="btn rounded-lg p-2 " to={`/products/${props.id}`}>
        <img
          className="  rounded-lg h-auto  hover:-translate-y-1 hover:scale-105  duration-300"
          src={props.imgProd}
          alt=""
        />
      </Link>
      <div className="p-2 pb-5">
        <div className="flex ">
          <button href="#">
            <h5 className={`text-lg font-semibold tracking-tight text-white`}>
              {props.nameProd}
            </h5>
          </button>
        </div>

        <div className="flex items-center ">
          <span
            className={`text-2xl font-bold text-white md:text-2xl lg:text-4xl sm:text-2xl`}
          >
            ${props.price}
          </span>

          <button
            className="btn btn-primary lg:w-20 w-auto h-auto ml-auto  "
            onClick={addProductToCartHandler}
          >
            {isLoading ? <SpinningLoadingIcon /> : <CartIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProdItem;
