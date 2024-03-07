import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from 'react-auth-kit';
import createStore  from 'react-auth-kit/createStore';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <AuthProvider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </AuthProvider>
  </>
  
);


