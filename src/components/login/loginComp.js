import { Fragment, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../redux/slices/login-slice';
import { notificationActions } from '../../redux/slices/notification-slice';
import requestAPI from '../../helpers/requestCalls';

const LoginComp = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const userInput = useRef();
  const passInput = useRef();
  const rememberMe = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const loginRequest = async () => {
    const payload = {
      mail: userInput.current.value,
      password: passInput.current.value,
      rememberMe: rememberMe.current.checked,
    };
    try {
      setIsLoading(true);
      const response = await requestAPI('users/login', 'POST', payload);
      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }
      dispatch(loginActions.login(response.data.user));
      history.push('/welcome');
      dispatch(
        notificationActions.showNotification({
          message: `Bienvenido ${response.data.user.username}`,
          type: 'alert-success',
        })
      );

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

  const loginHandler = (event) => {
    event.preventDefault();
    loginRequest();
  };

  return (
    <Fragment>
      <div
        className="grid grow h-auto card bg-base-300 rounded-box place-items-center self-stretch mr-5"
        id="loginCard"
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-bordered border-primary self-stretch sm:justify-center">
          <div className="card-body ">
            <h1 className="text-3xl font-bold">Ingresa a tu cuenta</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered border-primary"
                id="inputEmail"
                ref={userInput}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered border-primary"
                id="inputPassword"
                ref={passInput}
                required
              />
              <label className="label">
                <Link
                  to="login"
                  className="label-text-alt link link-hover text-primary mt-5"
                  onClick={props.action}
                >
                  olvidaste tu contraseña?
                </Link>
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-primary">Recuerdame</span>
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  ref={rememberMe}
                />
              </label>
            </div>
            <div className="form-control mt-5"></div>
            <div className="form-control mt-16" id="btnLogin">
              {isLoading ? (
                <button className="btn btn-primary loading">Cargando</button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={loginHandler}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginComp;
