import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteNames from './core/utils/route-names';
import './index.css';
import Login from './ui/pages/login/Login';
import SignUp from './ui/pages/sign-up/SignUp';
import Timeline from './ui/pages/timeline/Timeline';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={RouteNames.REGISTER} element={<SignUp/>} />
      <Route path={RouteNames.LOGIN} element={<Login/>} />
      <Route path={RouteNames.TIMELINE} element={<Timeline/>} />
    </Routes>
  </BrowserRouter>
);
