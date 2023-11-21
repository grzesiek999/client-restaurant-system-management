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
import UserLogginLayout from '../components/organisms/Layout/UserLogginLayout';
import AdminPanel from '../pages/AdminPanel';
import MenuPage from '../pages/MenuPage';
import WarehousePgae from '../pages/WarehousePage';
import SchedulePage from '../pages/SchedulePage';
import WorkersPage from '../pages/WorkersPage';


const ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<WebsiteLayout />}>
      <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTER_PATH.USER} element={<UserLogginLayout />}>
          <Route path={ROUTER_PATH.MENU} element={<MenuPage />} />
          <Route path={ROUTER_PATH.WAREHOUSE} element={<WarehousePgae />} />
          <Route path={ROUTER_PATH.SCHEDULE} element={<SchedulePage />} />
          <Route path={ROUTER_PATH.WORKERS} element={<WorkersPage />} />
          <Route element={<AdminRoute />}>
            <Route path={ROUTER_PATH.ADMIN_PANEL} element={<AdminPanel /> } />
            <Route path={ROUTER_PATH.ADD_WORKER} element={<AddWorkerPage />} />
          </Route>
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