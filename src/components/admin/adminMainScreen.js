import AdminMenuEl from './adminMenu/adminMenuEl';

import { CartIcon } from '../icons/icons';
import { UserIcon } from '../icons/icons';
import { PlantIcon } from '../icons/icons';
import { ReviewIcon } from '../icons/icons';

const AdminMainScreen = () => {
  return (
    <div className="mx-auto bg-neutral mt-10">
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-1">
          <div className="bg-base-100  flex-1 p-3 overflow-hidden">
            <div className="flex flex-col">
              <div className="flex items-center justify-center flex-col md:flex-row lg:flex-row mx-2">
                <AdminMenuEl
                  colorMenuCard={'bg-error'}
                  title={'Usuarios'}
                  img={<UserIcon />}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminMainScreen;
