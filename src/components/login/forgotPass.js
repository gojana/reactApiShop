import { useState, useRef, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import ButtonGeneric from '../buttons/buttonGeneric';
import requestAPI from '../../helpers/requestCalls';
import { notificationActions } from '../../redux/slices/notification-slice';

const ForgotPass = (props) => {
  //manejo state request
  const [isLoading, setIsLoading] = useState(false);
  const mailInput = useRef();
  const dispatch = useDispatch();

  const resetPasswords = async () => {
    try {
      setIsLoading(true);
      const response = await requestAPI('users/forgotPassword', 'POST', {
        mail: mailInput.current.value,
      });
      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }
      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: `correo con token de reset enviado a : ${mailInput.current.value}`,
          type: 'alert-success',
        })
      );
    } catch (err) {
      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: `${err}`,
          type: 'alert-error',
        })
      );
    }
  };

  const resetPassHandler = () => {
    resetPasswords();
  };

  return (
    <Fragment>
      <div className="p-8 rounded border border-primary">
        <h1 className="label font-medium text-3xl ">reset de Password</h1>
        <form>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="reset"
                className="label text-sm block mb-5  font-medium"
              >
                Email para enviar token de reset
              </label>
              <input
                type="text"
                name="resetPass"
                id="reset"
                className="input border-primary bg-base-100 border rounded py-1 px-3 block w-full"
                placeholder={`introduzca email`}
                ref={mailInput}
              />
            </div>
          </div>
        </form>
        <div className="mt-6">
          {isLoading ? (
            <button className="btn btn-primary loading">Cargando</button>
          ) : (
            <ButtonGeneric
              name="Resetear pass"
              css={`py-2 px-4 `}
              action={resetPassHandler}
              route={'login'}
            />
          )}
          <ButtonGeneric
            name="volver"
            css={`py-2 px-4 ml-5`}
            action={props.action}
            route={'login'}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPass;
