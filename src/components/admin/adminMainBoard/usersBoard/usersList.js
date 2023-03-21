import { useState, useCallback, useEffect, Fragment } from 'react';
import { notificationActions } from '../../../../redux/slices/notification-slice';
import requestAPI from '../../../../helpers/requestCalls';
import { useDispatch } from 'react-redux';
import ButtonCommon from '../../../buttons/buttonCommon';

const UserList = (props) => {
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
      requestUsers();
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
  useEffect(() => {
    requestUsers();
  }, [props.updatingList]);

  return (
    <div className="overflow-x-auto ">
      <table className="table w-full  mb-5">
        <thead>
          <tr>
            <th></th>
            <th>userName</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <Fragment key={user._id}>
                <tr className="hover">
                  <td></td>
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
                    <div>{`${user.mail}`}</div>
                  </td>
                  <th>
                    <div className="flex justify-center ">
                      <ButtonCommon
                        name="borrar"
                        css={'mr-5'}
                        action={() => deleteUser(user._id)}
                      />

                      <ButtonCommon
                        name="modificar"
                        css={'btn btn-primary'}
                        action={() => {
                          props.showUpdate(user);
                        }}
                      />
                    </div>
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
