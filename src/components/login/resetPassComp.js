import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import ButtonGeneric from '../buttons/buttonGeneric';
import requestAPI from '../../helpers/requestCalls';
import { notificationActions } from '../../redux/slices/notification-slice';

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const passwordReset = useRef();
  const repeatPasswordReset = useRef();
  const params = useParams();
  const history = useHistory();

  const resetPasswordRequest = async () => {
    const body = {
      password: passwordReset.current.value,
      repeatPassword: repeatPasswordReset.current.value,
    };
    try {
      setIsLoading(true);
      const response = await requestAPI(
        `users/resetPassword/${params.resetToken}`,
        'PATCH',
        body
      );
      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }

      setIsLoading(false);
      history.push('/login');
      dispatch(
        notificationActions.showNotification({
          message: `password cambiado con exito!`,
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

  const resetPasswordHandler = () => {
    resetPasswordRequest();
  };

  useEffect(() => {
    dispatch(
      notificationActions.showNotification({
        message: `tu token es valido solo por 10 minutos!`,
        type: 'alert-warning',
      })
    );
  }, []);

  return (
    <div className="hero min-h-screen">
      <div className="p-8 rounded border border-primary">
        <h1 className="label font-medium text-3xl ">reset de Password</h1>
        <form>
          <div className="mt-8 grid lg:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="resetPassword"
                className="label text-sm block mb-5  font-medium"
              >
                Nueva Password
              </label>
              <input
                type="password"
                name="resetPass"
                id="resetPassword"
                className="input border-primary bg-base-100 border rounded py-1 px-3 block w-full"
                placeholder={`******`}
                ref={passwordReset}
              />
            </div>
            <div>
              <label
                htmlFor="repeatResetPassword"
                className="label text-sm block mb-5  font-medium"
              >
                Repita nueva Password
              </label>
              <input
                type="password"
                name="repeatResetPass"
                id="repeatResetPassword"
                className="input border-primary bg-base-100 border rounded py-1 px-3 block w-full"
                placeholder={`********`}
                ref={repeatPasswordReset}
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
              action={resetPasswordHandler}
              route={'resetPassword'}
            />
          )}
          <ButtonGeneric name="volver" css={`py-2 px-4 ml-5`} route={'login'} />
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
