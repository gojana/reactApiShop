import { useRef, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { notificationActions } from '../../redux/slices/notification-slice';
import { AlertIcons } from '../icons/icons';

const Alert = (props) => {
  const message = useSelector(
    (state) => state.notification.notificationMessage
  );
  const show = useSelector((state) => state.notification.show);
  const notificationType = useSelector((state) => state.notification.type);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const clickHiddenModal = () => {
    dispatch(notificationActions.removeNotification());
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(notificationActions.removeNotification());
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <Fragment>
      {show && (
        <div
          className={`alert ${notificationType} flex sticky top-0 z-50 flex-row shadow-lg sm:h-12`}
          ref={ref}
        >
          <div>
            <AlertIcons type={notificationType} />
            <span>{`${message}`}</span>
          </div>
          <button
            className=" lg:pt-2 md:pt-2 sm:pb-2 "
            onClick={clickHiddenModal}
          >
            <AlertIcons type="alert-error" />
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default Alert;
