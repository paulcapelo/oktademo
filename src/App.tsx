import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, useLocation, useHistory } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security, SecureRoute } from '@okta/okta-react';
import Home from './pages/Home';
// import LoginCallback from './pages/LoginCallback';
import Profile from './pages/Profile';
import Profile2 from './pages/Profile2';
import Cart from './pages/Cart';
// import SecureRoute from './components/SecureRoute';



// const oktaAuth = new OktaAuth({
//   issuer: 'https://dev-54842592.okta.com/app/dev-54842592_testapp1_1/exk66tgjs6xOWZS2K5d7/sso/saml',//'https://${yourOktaDomain}/oauth2/default',
//   clientId: 'aln66tkwkcczZedRV5d7',
//   redirectUri: window.location.origin + '/login/callback'
// });

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-54842592.okta.com/oauth2/default',//'https://${yourOktaDomain}/oauth2/default',
  // issuer: 'https://dev-54842592.okta.com/app/dev-54842592_testapp1_1/exk66tgjs6xOWZS2K5d7/sso/saml',//'https://${yourOktaDomain}/oauth2/default',
  clientId: '0oa66xizhbdfEQ8AB5d7',
  redirectUri: window.location.origin + '/login/callback'
});

// agmexicom.com/token=sdcsdcsdcsd 

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
      <Route path="/profile" component={Profile} />
      <Route path="/profile-user" component={Profile2} />
    </Security>
  );
}
//?code=pPzvBY-IzerE8qdQfeLSLKudDhfLj_dQZIPurlZ2NbI&state=VYLqQpD20S5KcUaujeydJ0vXEdXaOYnk3Nuwlja8hG4AePylxaKFEDg2k8SFBO70
//?code=cEaqgZfC-e8Sa3sNXCl6JxaTlbk0PwLEBYRNmLExiok&state=zwih4LHjHj8sxgLzYT3EkjFfBwPWffnknO402IUM9Pyq8YUS0tOBioJNnKEjVPGz
export default App;
