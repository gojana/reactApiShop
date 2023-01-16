import { Fragment, useState } from 'react';
import RegisterComp from '../components/login/registerComp';
import LoginComp from '../components/login/loginComp';
import ForgotPass from '../components/login/forgotPass';

const Login = () => {
  const [isResetPass, setIsResetPass] = useState(false);

  const forgotPassRender = () => {
    setIsResetPass(!isResetPass);
  };

  return (
    <Fragment>
      <section id="heroLogin">
        {/*contenedor Hero*/}
        <div className="hero min-h-screen">
          {!isResetPass ? (
            <div className="hero-content flex-col lg:flex-row-reverse">
              {/*divisor*/}
              <div className="flex flex-col w-full lg:flex-row">
                <LoginComp action={forgotPassRender} />
                <div className="divider lg:divider-horizontal">O</div>
                <RegisterComp />
              </div>
            </div>
          ) : (
            <ForgotPass action={forgotPassRender} />
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
