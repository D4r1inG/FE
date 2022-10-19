import DefaultLayout from '@/layouts/default';
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Login = lazy(() => import('@/modules/login'));
const About = lazy(() => import('@/modules/about'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <h1 className="h-screen flex justify-center items-center text-lg">React + Vite</h1>
  },
  { path: '/login', element: <Login /> },
  {
    element: <DefaultLayout />,
    children: [{ path: '/about', element: <About /> }]
  }
];
