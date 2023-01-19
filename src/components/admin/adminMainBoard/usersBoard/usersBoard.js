import UserActions from './userActions';
import UserList from './usersList';

const usersBoard = () => {
  return (
    <div>
      <UserList />
      <UserActions />
    </div>
  );
};
export default usersBoard;
