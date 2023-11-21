import React from "react";
import { Outlet } from "react-router-dom";
import UserPanelNav from "../../molecules/UserPanel/UserPanelNav";
import "../../../styles/index.scss";


const UserLogginLayout = () => {

   return(
        <div className="user-loggin-layout-div-wrapper">
            <UserPanelNav />
            <Outlet/>
        </div>   
    ); 
}

export default UserLogginLayout;