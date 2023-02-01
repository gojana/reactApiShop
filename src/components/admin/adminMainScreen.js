import { useState } from 'react';
import UsersBoard from './adminMainBoard/usersBoard/usersBoard';
import ProductsBoard from './adminMainBoard/productBoard/productsBoard';
import AdminMenuEl from './adminMenu/adminMenuEl';
//import MainBoard from './adminMainBoard/mainBoard/mainBoard';

import { CartIcon } from '../icons/icons';
import { UserIcon } from '../icons/icons';
import { PlantIcon } from '../icons/icons';
import { ReviewIcon } from '../icons/icons';

const AdminMainScreen = () => {
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [showProductBoard, setShowProductBoard] = useState(false);
  const [showReviewBoard, setShowReviewBoard] = useState(false);
  const [showOrdersBoard, setShowOrdersBoard] = useState(false);

  const onClickMenu = (el) => {
    if (el === 'Usuarios') {
      setShowUserBoard(!showUserBoard);
      setShowProductBoard(false);
      setShowOrdersBoard(false);
      setShowOrdersBoard(false);
    }
    if (el === 'Productos') {
      setShowProductBoard(!showProductBoard);
      setShowUserBoard(false);
      setShowOrdersBoard(false);
      setShowOrdersBoard(false);
    }
    if (el === 'Reviews') {
      setShowReviewBoard(!showReviewBoard);
      setShowUserBoard(false);
      setShowOrdersBoard(false);
      setShowProductBoard(false);
    }
    if (el === 'Orders') {
      setShowOrdersBoard(!showOrdersBoard);
      setShowUserBoard(false);
      setShowReviewBoard(false);
      setShowProductBoard(false);
    }
  };

  return (
    <div className="mx-auto bg-neutral mt-10">
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-1">
          <div className="bg-base-100  flex-1 p-3 overflow-hidden">
            <div className="flex flex-col">
              <div className="flex justify-center items-center gap-1 md:flex-row lg:flex-row sm:flex-col">
                <AdminMenuEl
                  colorMenuCard={'bg-error'}
                  title={'Usuarios'}
                  img={<UserIcon />}
                  action={onClickMenu}
                />
                <AdminMenuEl
                  colorMenuCard={'bg-success'}
                  title={'Productos'}
                  img={<PlantIcon />}
                  action={onClickMenu}
                />
                <AdminMenuEl
                  colorMenuCard={'bg-warning'}
                  title={'Ordenes'}
                  img={<CartIcon />}
                  action={onClickMenu}
                />
                <AdminMenuEl
                  colorMenuCard={'bg-accent'}
                  title={'Reviews'}
                  img={<ReviewIcon />}
                  action={onClickMenu}
                />
              </div>
              {''}

              <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 items-center">
                <div className="rounded overflow-hidden shadow bg-neutral mx-2 w-full mt-10">
                  {''}
                  <div className="flex  p-5 lg:flex-row  md:flex-row sm:flex-col sm:gap-10 sm:ml-0">
                    {showUserBoard && <UsersBoard />}
                    {showProductBoard && <ProductsBoard />}
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
