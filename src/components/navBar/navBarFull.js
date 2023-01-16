import React, { useEffect, useCallback, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../redux/slices/login-slice';
import { cartActions } from '../../redux/slices/cart-slice';
//COMPONENTS
import NavBarCont from './navBarContainer';
import DayNightB from './../buttons/dayNightButton';
import NavBarLeft from './navBarL/navBarLContainer';
import NavBarR from './navBarR/navBarRContainer';
import Carrito from './navBarR/cart';
import Hamburger from './navBarR/hamburgerMenu';
import UserBadge from './navBarR/userBadge';
import MenuItemsR from './navBarR/menuItems/itemsMenuReactive';
import MenuItemsC from './navBarR/menuItems/menuItemsC';
import ButtonGeneric from '../buttons/buttonGeneric';
import { notificationActions } from '../../redux/slices/notification-slice';
//HELPERS
import requestAPI from '../../helpers/requestCalls';

const NavBarFull = () => {
  const [isLoading, setIsLoading] = useState(true);

  //REDUX data
  const dispatch = useDispatch();
  const isLoggedSelector = useSelector((state) => state.login.isLogged);
  const userRole = useSelector((state) => state.login.role);
  const userPhoto = useSelector((state) => state.login.photo);
  //const userName = useSelector((state) => state.login.username);
  const userId = useSelector((state) => state.login.id);

  const logoutAction = async () => {
    await requestAPI('users/logout', 'POST');
    dispatch(loginActions.logout());
    dispatch(
      notificationActions.showNotification({
        message: 'Deslogueado con exito',
        type: 'alert-success',
      })
    );
  };
  //API REQUEST
  const isLoggedIn = useCallback(async () => {
    try {
      const response = await requestAPI('users/loggedIn', 'POST');
      if (response.status === 'fail') {
        setIsLoading(false);
      }
      if (response === 'error') {
        setIsLoading(false);
        dispatch(
          notificationActions.showNotification({
            message: 'algo salio muy mal!',
            type: 'alert-error',
          })
        );
        throw new Error('algo salio muy mal!');
      }
      dispatch(loginActions.login(response.data.user));
      setIsLoading(false);
      dispatch(
        notificationActions.showNotification({
          message: `Bienvenido ${response.data.user.username}`,
          type: 'alert-success',
        })
      );
    } catch (err) {
      setIsLoading(false);
    }
  }, []);

  const getLocalStorageItems = () => {
    let cartString = localStorage.getItem('cart');
    const localStorageCart = JSON.parse(cartString);
    if (localStorageCart)
      localStorageCart.map((item) =>
        dispatch(cartActions.addLocalStorageItem(item))
      );
  };

  useEffect(() => {
    isLoggedIn();
  }, [isLoggedIn]);

  useEffect(() => {
    getLocalStorageItems();
  }, []);

  return (
    <Fragment>
      <NavBarCont>
        <NavBarLeft />
        <NavBarR>
          <DayNightB />
          <MenuItemsR>
            <MenuItemsC />
          </MenuItemsR>
          <Hamburger />
          <Carrito />
          {isLoading ? (
            <button className="btn btn-primary loading sm:w-20">
              Cargando
            </button>
          ) : isLoggedSelector ? (
            <UserBadge
              logout={logoutAction}
              role={userRole}
              photo={userPhoto}
              id={userId}
            />
          ) : (
            <ButtonGeneric name="LOGIN" route="login" css="ml-1" />
          )}
        </NavBarR>
      </NavBarCont>
    </Fragment>
  );
};

export default NavBarFull;
