import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-c2y1fogqnldultvh.us.auth0.com"
    clientId="vCdYhYtuz4cL7QNmlBSAAqyIID4VR9jk"
    redirectUri={window.location.origin + "/coolpage"}
  >
  <App />,
  </Auth0Provider>,
  document.getElementById('root')
);
