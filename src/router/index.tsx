import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout/AppLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Users from '../pages/Users/Users';
import RouterRoot from './RouterRoot';

export const routers = createBrowserRouter([
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
export const nonAuthRoutes = createBrowserRouter([
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
