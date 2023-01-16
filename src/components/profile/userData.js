import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../redux/slices/login-slice';
import { notificationActions } from '../../redux/slices/notification-slice';

import { requestAPIwFiles } from '../../helpers/requestCalls';

import ButtonGeneric from '../buttons/buttonGeneric';

const UserData = (props) => {
  //manejo state request
  const [isLoading, setIsLoading] = useState(false);
  //storage temporal de imagen a subir
  const [imgUpload, setImgUpload] = useState([]);
  //manejo de state de botones
  const [updateData, setUpdateData] = useState(false);
  const [disable, setDisable] = useState(true);

  const userNameInput = useRef();
  const dispatch = useDispatch();

  const uploadFileHandler = (event) => {
    setImgUpload(event.target.files[0]);
  };

  const updateUserRequest = async () => {
    const fd = new FormData();
  
    fd.append('username', userNameInput.current.value);
    fd.append('photo', imgUpload);
    try {
      setIsLoading(true);
      const response = await requestAPIwFiles('users/updateMe', 'PATCH', fd);
      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }
      dispatch(
        loginActions.updateUser({
          username: userNameInput.current.value,
          photo: response.data.user.photo,
        })
      );
      dispatch(
        notificationActions.showNotification({
          message: `datos de usuario actualizados!`,
          type: 'alert-success',
        })
      );
      setIsLoading(false);
      setDisable(true);
      setUpdateData(false);
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

  const disableHandler = (event) => {
    setUpdateData(true);
    setDisable(false);
  };
  const cancelHandler = (event) => {
    setUpdateData(false);
    setDisable(true);
  };
  const updateUserHandler = (event) => {
    event.preventDefault();
    updateUserRequest();
  };

  return (
    <div className="p-8 rounded border border-gray-200">
      <h1 className="font-medium text-3xl text-white">Datos de cuenta</h1>
      <form>
        <div className="mt-8 grid lg:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="text-sm block mb-1 text-white font-medium"
            >
              Nombre Usuario
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="input bg-base-100 border rounded py-1 px-3 block  w-full"
              placeholder={`${props.userName}`}
              disabled={disable}
              ref={userNameInput}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm text-white block mb-1 font-medium"
            >
              Email
            </label>
            <label className="input bg-base-100 border rounded py-2 px-3 block  w-full">{`${props.mail}`}</label>
          </div>
          <div>
            <label
              htmlFor="uploadImage"
              className={`text-sm text-white mb-1 font-medium ${
                !updateData ? 'hidden' : 'block'
              }`}
            >
              Cambiar Foto Perfil
            </label>
            <input
              id="uploadImage"
              type="file"
              className={`file-input text-white w-full max-w-xs ${
                !updateData ? 'hidden' : ''
              }`}
              onChange={uploadFileHandler}
            />
          </div>
        </div>
        <div className=" mt-8">
          <ButtonGeneric
            name="Cambiar Datos"
            css={`py-2 px-4 ${!updateData ? '' : 'hidden'}`}
            action={disableHandler}
            route={'profile'}
          />
          {isLoading ? (
            <button
              className={`btn btn-primary loading mr-5 ${
                !updateData ? 'hidden' : ''
              }`}
            >
              Cargando
            </button>
          ) : (
            <ButtonGeneric
              name="Cambiar"
              css={`mr-5 ${!updateData ? 'hidden' : ''}`}
              action={updateUserHandler}
              route={'profile'}
            />
          )}

          <ButtonGeneric
            name="Cancelar"
            css={`py-2 px-4 ${!updateData ? 'hidden' : ''}`}
            action={cancelHandler}
            route={'profile'}
          />
        </div>
      </form>
    </div>
  );
};

export default UserData;
