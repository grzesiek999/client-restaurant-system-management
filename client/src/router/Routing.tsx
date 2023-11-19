import { type ReactElement } from 'react';
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom';

import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import { ROUTER_PATH } from './RouterPath';
import WebsiteLayout from '../pages/WebsiteLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import AddWorkerPage from '../pages/AddWorkerPage';
import AdminRoute from './AdminRoute';


const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<WebsiteLayout />}>
      <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
      <Route element={<ProtectedRoute />}>
      

      <Route element={<AdminRoute />}>
        <Route path={ROUTER_PATH.ADD_WORKER} element={<AddWorkerPage />} />
      </Route>
      </Route>
      <Route element={<PublicRoute />}>
        <Route path={ROUTER_PATH.LOGIN} element={<LoginPage />} />
      </Route>
    </Route>
  )
);

export default function Router(): ReactElement {
  return <RouterProvider router={ROUTER} />;
}