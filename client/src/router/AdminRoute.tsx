import React, { useContext } from 'react';
import { ROUTER_PATH } from './RouterPath';
import { Navigate, Outlet } from 'react-router-dom';
import { UserAuth } from '../context/UserDataContext';


export default function AdminRoute () {

    const {user} = useContext(UserAuth);

    if(user && user.role){
        return <Navigate to={ROUTER_PATH.HOME} />
    }
    return <Outlet />;
}