import { useState, useCallback, useEffect, Fragment } from 'react';
import { notificationActions } from '../../../../redux/slices/notification-slice';
import requestAPI from '../../../../helpers/requestCalls';
import { useDispatch } from 'react-redux';

const UserList = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const requestUsers = useCallback(async () => {
    try {
      const response = await requestAPI('users', 'GET');

      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error(`algo salio muy mal!`);
      }
      setUsersList(response.data.getUsers);
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
  }, []);
  const deleteUser = async (idUser) => {
    try {
      const response = await requestAPI('users/userActions', 'DELETE', {
        id: idUser,
      });

      if (response.status === 'fail') {
        setIsLoading(false);
        throw new Error(response.message);
      }
      if (response === 'error') {
        setIsLoading(false);
        throw new Error(`algo salio muy mal! ${response.message}`);
      }

      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: `usuario borrado!`,
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

  const onClickDeleteUser = (id) => {
    deleteUser(id);
  };

  useEffect(() => {
    requestUsers();
  }, []);

  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>userName</th>
            <th>email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <Fragment key={user._id}>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}/api/v1/userResources/${user.photo}`}
                            alt="img"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.mail}
                    <br />
                  </td>
                  <th>
                    <button
                      className="btn btn-primary mr-5"
                      onClick={() => onClickDeleteUser(user._id)}
                    >
                      borrar
                    </button>
                    <button className="btn btn-primary">modificar</button>
                  </th>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
