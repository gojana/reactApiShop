import { useState } from 'react';
import UserUpdate from './userUpdate';
import UserList from './usersList';

const UsersBoard = () => {
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [updateList, setUpdateList] = useState(false);

  const hideUpdateUser = () => {
    setShowUpdateUser(!showUpdateUser);
  };
  const onClickShowUpdateUser = (user) => {
    setUserInfo(user);
    setUpdateList(false);
    setShowUpdateUser(true);
  };
  const updateListHandler = (bool) => {
    setUpdateList(bool);
  };

  return (
    <div className="flex flex-col w-full ">
      <UserList showUpdate={onClickShowUpdateUser} updatingList={updateList} />
      {showUpdateUser && (
        <UserUpdate
          cancel={hideUpdateUser}
          update={updateListHandler}
          data={userInfo}
        />
      )}
    </div>
  );
};
export default UsersBoard;
