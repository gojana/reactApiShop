import React, { useState } from 'react';
import requestAPI from '../../helpers/requestCalls';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../redux/slices/login-slice';
import { useHistory } from 'react-router-dom';
import { notificationActions } from '../../redux/slices/notification-slice';

import ButtonCommon from '../buttons/buttonCommon';

const PassData = (props) => {
  //manejo state request
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  });
  const [btnActive, setBtnActive] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    if (
      inputs.currentPassword.length > 1 &&
      inputs.newPassword.length > 1 &&
      inputs.repeatNewPassword.length > 1
    ) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const logoutAction = async () => {
    try {
      setIsLoading(true);
      await requestAPI('users/logout', 'POST');

      dispatch(loginActions.logout());
      setIsLoading(false);
    } catch (err) {
      dispatch(
        notificationActions.showNotification({
          message: `algo salio muy mal! : ${err.message}`,
          type: 'alert-error',
        })
      );
      setIsLoading(false);
    }
  };

  const changePassRequest = async () => {
    const body = {
      passwordCurrent: inputs.currentPassword,
      password: inputs.newPassword,
      repeatPassword: inputs.repeatNewPassword,
    };
    try {
      setIsLoading(true);
      const response = await requestAPI(
        'users/updateMyPassword',
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
      logoutAction();
      dispatch(
        notificationActions.showNotification({
          message: `pass cambiada con exito,favor reloguear`,
          type: 'alert-success',
        })
      );
      history.push('/login');
      setIsLoading(false);
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

  const changePassHandler = (event) => {
    changePassRequest();
  };

  return (
    <div className="p-8 rounded border  border-gray-200">
      <h1 className="font-medium text-3xl text-white">Cambiar Password</h1>
      <form>
        <div className="mt-5">
          <label
            htmlFor="currentPass"
            className="text-sm block mb-1 text-white font-medium"
          >
            Password actual
          </label>
          <input
            type="password"
            name="currentPassword"
            id="currentPass"
            className="input bg-base-100 border rounded py-1 px-3 block  w-full"
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="password"
              className="text-sm block mb-1 text-white font-medium"
            >
              Password nueva
            </label>
            <input
              type="password"
              name="newPassword"
              id="password"
              className="input bg-base-100 border rounded py-1 px-3 block  w-full"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="repeatPass"
              className="text-sm text-white block mb-1 font-medium"
            >
              Repita Password
            </label>
            <input
              type="password"
              name="repeatNewPassword"
              id="repeatPass"
              className="input  bg-base-100 border rounded py-1 px-3 block  w-full"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col items-center gap-5 mt-8">
          {isLoading ? (
            <button className="btn btn-primary loading py-2 px-4">
              Cargando
            </button>
          ) : (
            <ButtonCommon
              name="Cambiar Password"
              css={`py-2  ${btnActive ? '' : 'btn-disabled'}`}
              action={changePassHandler}
            />
          )}

          <ButtonCommon
            name="Cancelar"
            css={`lg:mt-0 md:lt-0sm:mt-5`}
            action={props.close}
          />
        </div>
      </form>
    </div>
  );
};

export default PassData;
