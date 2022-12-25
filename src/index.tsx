import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteNames from './core/utils/route-names';
import './index.css';
import AuthGuard from './ui/guards/AuthGuard';
import CreatePost from './ui/pages/create-post/CreatePost';
import Home from './ui/pages/home/Home';
import Login from './ui/pages/login/Login';
import PostView from './ui/pages/post-view/PostView';
import SignUp from './ui/pages/sign-up/SignUp';
import Timeline from './ui/pages/timeline/Timeline';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={RouteNames.HOME} element={<AuthGuard><Home/></AuthGuard>} />
      <Route path={RouteNames.REGISTER} element={<SignUp/>} />
      <Route path={RouteNames.LOGIN} element={<Login/>} />
      <Route path={RouteNames.TIMELINE} element={<Timeline/>} />
      <Route path={RouteNames.POST_VIEW + '/:id'} element={<PostView/>} />
      <Route path={RouteNames.CREATE_POST} element={<AuthGuard><CreatePost/></AuthGuard>} />
    </Routes>
  </BrowserRouter>
);
