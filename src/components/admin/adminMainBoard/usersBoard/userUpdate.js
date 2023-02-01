import React, { useState, useRef } from 'react';
import ButtonCommon from '../../../buttons/buttonCommon';
import { useDispatch } from 'react-redux';
import { notificationActions } from '../../../../redux/slices/notification-slice';
import { requestAPIwFiles } from '../../../../helpers/requestCalls';

const UserUpdate = (props) => {
  const [imgUpload, setImgUpload] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [btnActive, setBtnActive] = useState(false);

  const userNameInput = useRef();
  const mailInput = useRef();
  const dispatch = useDispatch();

  const updateUserRequest = async () => {
    const fd = new FormData();
    fd.append('id', props.data._id);
    fd.append('username', userNameInput.current.value);
    fd.append('mail', mailInput.current.value);
    fd.append('photo', imgUpload);

    try {
      setIsLoading(true);
      const response = await requestAPIwFiles(`users/userActions`, 'PATCH', fd);
      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error('algo salio muy mal!');
      }
      dispatch(
        notificationActions.showNotification({
          message: `datos de usuario actualizados!`,
          type: 'alert-success',
        })
      );

      setIsLoading(false);
      props.update(true);
      props.action();
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

  const uploadFileHandler = (event) => {
    setImgUpload(event.target.files[0]);
  };

  const updateUserHandler = (event) => {
    event.preventDefault();
    updateUserRequest();
  };

  return (
    <div className="p-8 rounded border border-primary lg:mt-0  md:lg-5 md:mt-0 sm:mt-5 sm:ml-0 ">
      <h1 className="font-medium text-3xl text-white">
        Datos de usuario a modificar
      </h1>
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
              placeholder={`${props.data.username}`}
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
            <input
              className="input bg-base-100 border rounded py-2 px-3 block  w-full"
              placeholder={`${props.data.mail}`}
              ref={mailInput}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className={`text-sm text-white mb-2  font-medium`}>
              Cambiar Foto Perfil
            </label>
            <input
              id="uploadImage"
              type="file"
              className="file-input file-input-sm file-input-primary file-input-bordered max-w-xs w-full "
              onChange={uploadFileHandler}
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-col gap-2 mt-8">
          {isLoading ? (
            <button className={`btn btn-primary loading mr-5`}>Cargando</button>
          ) : (
            <ButtonCommon
              name="Cambiar Datos"
              css={`
                sm: mb-5;
              `}
              action={updateUserHandler}
            />
          )}
          <ButtonCommon name="Cancelar" action={props.action} />
        </div>
      </form>
    </div>
  );
};

export default UserUpdate;
