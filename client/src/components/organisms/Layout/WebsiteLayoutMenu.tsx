import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from '../../../router/RouterPath';
import "../../../styles/index.scss";


const WebsiteLayoutMenu = () => {
    return(
        <div className="website-layout-menu-div-wrapper">
            <div>nav</div>
            <div>logo</div>
            <div>
                <Link to={ROUTER_PATH.LOGIN}>Zaloguj</Link>
            </div>
        </div>
    );
}

export default WebsiteLayoutMenu;