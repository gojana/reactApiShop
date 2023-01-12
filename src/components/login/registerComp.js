import { Fragment, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import requestAPI from '../../helpers/requestCalls';
import { notificationActions } from '../../redux/slices/notification-slice';

const RegisterComp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const [agreeCheckBox, setAgreeCheckBox] = useState(false);
  const [inputs, setInputs] = useState({
    mail: '',
    userName: '',
    password: '',
    repeatPassword: '',
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    if (
      inputs.mail.length > 1 &&
      inputs.userName.length > 1 &&
      inputs.password.length > 1 &&
      inputs.repeatPassword.length > 1
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

  const checkboxHandler = () => {
    setAgreeCheckBox(!agreeCheckBox);
  };

  const registerRequest = async () => {
    if (!agreeCheckBox) {
      dispatch(
        notificationActions.showNotification({
          message: `debes estar de acuerdo con los terminos y condiciones`,
          type: 'alert-error',
        })
      );
      return;
    }

    const payload = {
      mail: inputs.mail,
      username: inputs.userName,
      password: inputs.password,
      repeatPassword: inputs.repeatPassword,
    };

    try {
      setIsLoading(true);
      const response = await requestAPI('users/signup', 'POST', payload);
      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }

      setIsLoading(false);
      history.push('/welcome');
      dispatch(
        notificationActions.showNotification({
          message: `Cuenta creada con exito!`,
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
  const registerhandler = (event) => {
    event.preventDefault();
    registerRequest();
  };

  return (
    <Fragment>
      <div className="grid grow h-auto card bg-base-300 rounded-box place-items-center self-stretch mr-5  xl:ml-5 lg:ml-5  sm:-ml-3">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-bordered border-primary self-stretch sm:justify-center ">
          <div className="card-body ">
            <h1 className="text-3xl font-bold mb-5">Registrate</h1>
            <div className="form-control ">
              <input
                type="text"
                placeholder="mail"
                name="mail"
                onChange={handleInputChange}
                className="input input-bordered border-primary mb-5"
              />
              <input
                type="text"
                name="userName"
                placeholder="username"
                onChange={handleInputChange}
                className="input input-bordered border-primary mb-5"
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleInputChange}
                className="input input-bordered border-primary mb-5"
              />
              <input
                type="password"
                placeholder="repetir password"
                name="repeatPassword"
                onChange={handleInputChange}
                className="input input-bordered border-primary mb-5"
              />
            </div>
            <label className="label cursor-pointer ">
              <Link
                to=""
                className="label-text-alt link link-hover text-primary "
              >
                de acuerdo con terminos y condiciones
              </Link>
              <input
                type="checkbox"
                className="checkbox checkbox-primary ml-5 "
                onClick={checkboxHandler}
              />
            </label>
            <div className="form-control ">
              {isLoading ? (
                <button className="btn btn-primary loading">Cargando</button>
              ) : (
                <button
                  type="button"
                  className={`btn btn-primary ${
                    btnActive ? '' : 'btn-disabled'
                  } mt-7`}
                  onClick={registerhandler}
                >
                  Registrarse
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterComp;
