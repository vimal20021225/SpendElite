import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './pages/Aboutpage';
import ContactPage from './pages/Contactpage';
import LoginPage from './pages/Loginpage';
import HomePage from './pages/Homepage';

const routes = createBrowserRouter([{
  path : "/",
  element : <App />,
  children : [{
    path : "/about",
    element : <AboutPage />
  },{
    path : "/home",
    element : <HomePage />
  },{
    path : "/contact",
    element : <ContactPage />
  },{
    path : "/login",
    element : <LoginPage />
  }]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
