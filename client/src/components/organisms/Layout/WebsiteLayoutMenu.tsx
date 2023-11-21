import React, { useContext } from "react";
import "../../../styles/index.scss";
import LogoutButton from "../../atoms/buttons/LogoutButton";
import { UserAuth } from "../../../context/UserDataContext";
import LoginLink from "../../atoms/links/LoginLink";


const WebsiteLayoutMenu = () => {

    const {user} = useContext(UserAuth);

    return(
        <div className="website-layout-menu-div-wrapper">
            <div>nav</div>
            <div>logo</div>
            {user ? <LogoutButton/> : <LoginLink />}
        </div>
    );
}

export default WebsiteLayoutMenu;