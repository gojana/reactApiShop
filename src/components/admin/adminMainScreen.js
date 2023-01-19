import { useState } from 'react';
import UsersBoard from './adminMainBoard/usersBoard/usersBoard';

import AdminMenuEl from './adminMenu/adminMenuEl';
import MainBoard from './adminMainBoard/mainBoard/mainBoard';

import { CartIcon } from '../icons/icons';
import { UserIcon } from '../icons/icons';
import { PlantIcon } from '../icons/icons';
import { ReviewIcon } from '../icons/icons';

const AdminMainScreen = () => {
  const [showUserBoard, setShowUserBoard] = useState(false);

  const onClickUserMenu = () => {
    setShowUserBoard(!showUserBoard);
  };

  return (
    <div className="mx-auto bg-neutral mt-10">
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-1">
          <div className="bg-base-100  flex-1 p-3 overflow-hidden">
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center mx-10 md:flex-row lg:flex-row">
                <AdminMenuEl
                  colorMenuCard={'bg-error'}
                  title={'Usuarios'}
                  img={<UserIcon />}
                  action={onClickUserMenu}
                />
                <AdminMenuEl
                  colorMenuCard={'bg-success'}
                  title={'Productos'}
                  img={<PlantIcon />}
                />
                <AdminMenuEl
                  colorMenuCard={'bg-warning'}
                  title={'Ordenes'}
                  img={<CartIcon />}
                />
                <AdminMenuEl
                  colorMenuCard={'bg-accent'}
                  title={'Reviews'}
                  img={<ReviewIcon />}
                />
              </div>
              {''}

              <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                <div className="rounded overflow-hidden shadow bg-neutral mx-2 w-full mt-10">
                  {''}
                  <div className="flex overflow-x-auto p-10 gap-20 lg:flex-row md:flex-row sm:flex-col sm:gap-10 sm:ml-0">
                    {showUserBoard && <UsersBoard />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminMainScreen;
