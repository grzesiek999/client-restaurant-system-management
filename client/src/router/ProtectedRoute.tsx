import React from 'react';
import { ROUTER_PATH } from './RouterPath';
import { Navigate, Outlet } from 'react-router-dom';


export default function ProtectedRoute() {

    if(!localStorage.getItem('user')){
        return <Navigate to={ROUTER_PATH.LOGIN} />;
    }

    return <Outlet />;
}