import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import RouterRoot from './RouterRoot';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import AppLayout from '../layouts/AppLayout/AppLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Users from '../pages/Users/Users';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RouterRoot />,
    children: [
      {
        path: '',
        element: <AppLayout></AppLayout>,
        children: [
          {
            path: '',
            element: <Home></Home>,
          },
          {
            path: 'users',
            element: <Users></Users>,
          },
        ],
      },
    ],
  },
]);
const nonAuthRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Outlet></Outlet>,
    children: [
      {
        path: '',
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: '',
            element: <Navigate to={'/login'}></Navigate>,
          },
          {
            path: 'login',
            element: <Login></Login>,
          },
        ],
      },
    ],
  },
]);

export default routers;
