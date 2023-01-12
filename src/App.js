import React, { Fragment, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBarFull from './components/navBar/navBarFull';
import Welcome from './pages/welcome';
import Login from './pages/login';
import ResetPassword from './pages/resetPass';
import FooterC from './components/footer/footerC';
import Alert from './components/alerts/alert';
import StickyButton from './components/buttons/stickyButton';

import Profile from './pages/profile';
import ProductsPage from './pages/productsPage';
import ProductItem from './pages/productItem';
import CartPage from './pages/cartPage';
import ErrorCard from './components/utilitaryCards/errorCard';

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
        <Route path="/welcome" exact>
          <Welcome />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/cart">
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
        <Route path="/*">
          <ErrorCard />
        </Route>
      </Switch>
      <section id="footer">
        <FooterC />
      </section>
    </Fragment>
  );
}

export default App;
