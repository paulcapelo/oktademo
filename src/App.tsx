import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, useLocation, useHistory } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security, SecureRoute } from '@okta/okta-react';
import Home from './pages/Home';
import LoginCallback from './pages/LoginCallback';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
// import SecureRoute from './components/SecureRoute';



const oktaAuth = new OktaAuth({
  issuer: 'https://dev-54842592.okta.com/app/dev-54842592_testapp1_1/exk66tgjs6xOWZS2K5d7/sso/saml',//'https://${yourOktaDomain}/oauth2/default',
  clientId: 'http://www.okta.com/exk66tgjs6xOWZS2K5d7',
  redirectUri: window.location.origin + '/login/callback'
});

function App() {

  let navigate = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (

    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} >
      <Route path="/" exact={true} component={Home} />
      <Route path="/cart" component={Cart} />
      {/* <SecureRoute path="/checkout" component={Checkout} /> */}
      <Route path="/login/callback" component={LoginCallback} />
    </Security>
  );
}

export default App;
