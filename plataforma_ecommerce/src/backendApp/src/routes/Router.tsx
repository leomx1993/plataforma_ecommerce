import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './Router.css';

const Login = React.lazy(() => import ("./Login/Login.tsx"));
const Home = React.lazy(() => import ("./Home/Home.tsx"));
const UserArea = React.lazy(() => import ("./UserArea/UserArea.tsx"));


function Router() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Login/" element={<Login />} />
        <Route path="user-area/" element={<UserArea />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
