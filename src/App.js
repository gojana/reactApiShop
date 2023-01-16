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
        <Route path="/about" exact>
          <About />
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
