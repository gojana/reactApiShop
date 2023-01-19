import React, { Fragment, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarFull from './components/navBar/navBarFull';
import Welcome from './layouts/welcome';
import Login from './layouts/login';
import ResetPassword from './layouts/resetPass';
import FooterC from './components/footer/footerC';
import Alert from './components/alerts/alert';
import StickyButton from './components/buttons/stickyButton';

import Profile from './layouts/profile';
import ProductsPage from './layouts/productsPage';
import ProductItem from './layouts/productItem';
import CartPage from './layouts/cartPage';
import ErrorCard from './components/utilitaryCards/errorCard';
import About from './layouts/about';
import AdminActions from './layouts/adminActions';

function App() {
  const scrollUpRef = useRef();

  return (
    <Fragment>
      <section id="navBar">
        <div ref={scrollUpRef}>
          <NavBarFull />
        </div>
      </section>
      <StickyButton refParent={scrollUpRef} />
      <Alert type="warning" show="hidden" />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/adminPanel" exact>
          <AdminActions />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/resetPassword/:resetToken">
          <ResetPassword />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:productId">
          <ProductItem />
        </Route>
        <Route path="/blog" exact>
          <ErrorCard
            img={'work'}
            message={'Seccion en construccion'}
            messageDetail={
              'pronto estara terminada! mientras espera junto al topo...'
            }
          />
        </Route>
        <Route path="/blog/:blogArticle" exact>
          <ErrorCard
            img={'work'}
            message={'Seccion en construccion'}
            messageDetail={
              'pronto estara terminada! mientras espera junto al topo...'
            }
          />
        </Route>
        <Route path="/orders/:userId">
          <ErrorCard
            img={'work'}
            message={'Seccion en construccion'}
            messageDetail={
              'pronto estara terminada! mientras espera junto al topo...'
            }
          />
        </Route>
        <Route path="/reviews/:userId">
          <ErrorCard
            img={'work'}
            message={'Seccion en construccion'}
            messageDetail={
              'pronto estara terminada! mientras espera junto al topo...'
            }
          />
        </Route>
        <Route path="/*">
          <ErrorCard
            img={'error'}
            message={'OOPS! Algo ha salido mal!'}
            messageDetail={'sip, aqui va el error 404'}
          />
        </Route>
      </Switch>
      <section id="footer">
        <FooterC />
      </section>
    </Fragment>
  );
}

export default App;
