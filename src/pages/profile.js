import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import ButtonGeneric from '../components/buttons/buttonGeneric';
import Userdata from '../components/profile/userData';
import PassData from '../components/profile/passData';

const Profile = (props) => {
  const [showData, setShowData] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const userPhotoSelector = useSelector((state) => state.login.photo);
  const userNameSelector = useSelector((state) => state.login.username);
  const userMailSelector = useSelector((state) => state.login.mail);
  const userIdSelector = useSelector((state) => state.login.id);

  const datosCuentaHandler = (event) => {
    setShowData(!showData);
    setShowPass(false);
  };
  const passHandler = (event) => {
    setShowPass(!showPass);
    setShowData(false);
  };

  return (
    <Fragment>
      <div className="p-8">
        <div className="p-8 bg-neutral shadow mt-24">
          <div className="relative">
            <div className="w-48 h-48 mx-auto absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">
              <img
                className="btn-ghost btn-circle h-40 w-40"
                src={`http://127.0.0.1:4000/api/v1/userResources/${userPhotoSelector}`}
                alt=""
              />
            </div>
          </div>
          <div className=" mt-28 space-x-8 flex   justify-center">
            <ButtonGeneric
              name="Datos Cuenta"
              route={'profile'}
              action={datosCuentaHandler}
            />
            <ButtonGeneric
              name="Cambio de Pass"
              route={'profile'}
              action={passHandler}
            />
          </div>

          <div className="mt-20 text-center border-b pb-12">
            <h1 className="text-4xl font-medium text-white">{`Hola ${userNameSelector}!`}</h1>
          </div>
          {showData && (
            <Userdata
              userName={userNameSelector}
              mail={userMailSelector}
              id={userIdSelector}
            />
          )}
          {showPass && <PassData close={passHandler} />}
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
