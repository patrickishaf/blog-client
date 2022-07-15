import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteNames from './core/utils/route-names';
import './index.css';
import Login from './ui/pages/login/Login';
import SignUp from './ui/pages/sign-up/SignUp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.REGISTER} element={<SignUp/>} />
        <Route path={RouteNames.LOGIN} element={<Login/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
