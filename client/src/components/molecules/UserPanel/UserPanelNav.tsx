import React, { useContext } from "react";
import { UserAuth } from "../../../context/UserDataContext";
import "../../../styles/index.scss";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../../router/RouterPath";


const UserPanelNav = () => {

    const {user} = useContext(UserAuth);

    return(
        <div className="user-panel-nav-div-wrapper">
            <nav>
                <ul>
                    <li><Link to={ROUTER_PATH.MENU}>Menu</Link></li>
                    <li><Link to={ROUTER_PATH.WAREHOUSE}>Magazyn</Link></li>
                    <li><Link to={ROUTER_PATH.SCHEDULE}>Grafik</Link></li>
                    <li><Link to={ROUTER_PATH.WORKERS}>Pracownicy</Link></li>
                    {user?.role==='admin' ? <li><Link to={ROUTER_PATH.ADMIN_PANEL}>Admin Panel</Link></li>:null}
                </ul>
            </nav>
        </div>
    );
}

export default UserPanelNav;