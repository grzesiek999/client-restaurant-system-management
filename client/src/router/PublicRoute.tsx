import React from 'react';
import { ROUTER_PATH } from './RouterPath';
import { Navigate, Outlet } from 'react-router-dom';


export default function PublicRoute() {

    if(localStorage.getItem('user')){
        return <Navigate to={ROUTER_PATH.USER} />;
    }

    return <Outlet />;
}