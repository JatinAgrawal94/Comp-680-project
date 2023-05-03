import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./store"
import { Auth0Provider } from "@auth0/auth0-react";
import { processResult } from 'immer/dist/internal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
    domain="dev-jue5bhlw.us.auth0.com"
    clientId="xVpguRO2jJBky9D50hLIRVV3jqfFt3rN"
    
    authorizationParams={{
      redirect_uri:"https://resplendent-lamington-764aee.netlify.app",
      clientId:xVpguRO2jJBky9D50hLIRVV3jqfFt3rN,
      client_secret:process.env.REACT_APP_AUTH0_SECRET
    }}
  >
    <Provider store={store}>
    <App />
    </Provider>
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
