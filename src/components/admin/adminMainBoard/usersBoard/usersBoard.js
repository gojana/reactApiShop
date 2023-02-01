import { useState } from 'react';
import UserUpdate from './userUpdate';
import UserList from './usersList';

const UsersBoard = () => {
  const [showUserActions, setShowUserActions] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [updateList, setUpdateList] = useState(false);

  const onClickShowUserActionsToggle = () => {
    setShowUserActions(!showUserActions);
  };
  const onClickShowUserActionsNotToggle = (user) => {
    setUserInfo(user);
    setUpdateList(false);
    setShowUserActions(true);
  };
  const updateListHandler = (bool) => {
    setUpdateList(bool);
  };

  return (
    <div className="flex flex-col w-full ">
      <UserList
        action={onClickShowUserActionsNotToggle}
        willUpdate={updateList}
      />
      {showUserActions && (
        <UserUpdate
          action={onClickShowUserActionsToggle}
          update={updateListHandler}
          data={userInfo}
        />
      )}
    </div>
  );
};
export default UsersBoard;
