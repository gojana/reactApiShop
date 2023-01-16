import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../redux/slices/cart-slice';
import { notificationActions } from '../../../../redux/slices/notification-slice';

const ProductDetailText = (props) => {
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        itemId: props.id,
        name: props.productName,
        img: props.img,
        price: props.price,
      })
    );
    dispatch(
      notificationActions.showNotification({
        message: `producto : ${props.productName} agregado al carrito!`,
        type: 'alert-success',
      })
    );
  };

  return (
    <Fragment>
      <div className="p-4 rounded border border-primary lg:ml-30 lg:-mt-2 md:-mt-2 xl:ml-50  md:flex-1 md:ml-10 sm:mt-4">
        <div className=" px-4 ">
          <h2 className="mb-2 leading-tight tracking-tight font-bold  text-2xl md:text-3xl">
            {`${props.productName}`}
          </h2>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-neutral flex py-2 px-3">
                <span className="text-primary mr-1 mt-1">$</span>
                <span className="font-bold text-white text-3xl">{`${props.price}`}</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-green-500 text-xl font-semibold">{`Ahorra un ${props.dsct}`}</p>
            </div>
          </div>

          <p>{`${props.type}`}</p>
          <p>{`${props.description}`}</p>
          <p>{`${props.specs}`}</p>
          <p>{`Stock: ${props.stock}`}</p>

          <div className="flex py-4 space-x-4 mt-24">
            <button
              type="button"
              className="btn btn-primary h-10 px-6 py-2 font-semibold rounded-xl  text-white"
              onClick={addItemToCartHandler}
            >
              Agregar al Carro
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductDetailText;
