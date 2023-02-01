import { useState } from 'react';
import IncrementerInput from '../buttons/incrementerInput';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cart-slice';
import ButtonGeneric from '../buttons/buttonGeneric';
import { notificationActions } from '../../redux/slices/notification-slice';

const CartElements = (props) => {
  const [isLoading, setIsloading] = useState(false);

  const dispatch = useDispatch();

  const addItemIncrementerInput = () => {
    try {
      setIsloading(true);
      dispatch(
        cartActions.addItemToCart({
          itemId: props.id,
          name: props.name,
          img: props.image,
          price: props.price,
        })
      );
      dispatch(
        notificationActions.showNotification({
          message: `producto agregado!`,
          type: 'alert-success',
        })
      );
      setIsloading(false);
    } catch (err) {
      dispatch(
        notificationActions.showNotification({
          message: `${err}!`,
          type: 'alert-error',
        })
      );
      setIsloading(false);
    }
  };
  const removeItemInput = () => {
    try {
      setIsloading(true);
      dispatch(cartActions.removeItemFromCart(props.id));
      dispatch(
        notificationActions.showNotification({
          message: `producto removido!`,
          type: 'alert-warning',
        })
      );
      setIsloading(false);
    } catch (err) {
      dispatch(
        notificationActions.showNotification({
          message: `${err}`,
          type: 'alert-error',
        })
      );
      setIsloading(false);
    }
  };

  return (
    <tbody>
      <tr>
        <td></td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={props.image} alt="img" />
              </div>
            </div>
            <div>
              <div className="font-bold">{props.name}</div>
            </div>
          </div>
        </td>
        <td>
          {props.price}
          <br />
        </td>
        <td>
          {props.quantity}
          <br />
        </td>
        <td>{props.totalPrice}</td>
        <th>
          <div className="flex flex-row justify-end">
            <ButtonGeneric
              css={'mr-10'}
              name={'Detalles'}
              route={`products/${props.id}`}
            />
            <IncrementerInput
              show={false}
              increment={addItemIncrementerInput}
              decrement={removeItemInput}
              isLoading={isLoading}
            />
          </div>
        </th>
      </tr>
    </tbody>
  );
};

export default CartElements;
