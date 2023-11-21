import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/UserDataContext";
import { SESSION } from "../../../constant/UserSession";


const LogoutButton = () => {

    const {logOut} = useContext(UserAuth);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem(SESSION.USER);
        logOut();
        navigate('/');
    };

    return(
        <div>
            <button type='button' onClick={logout}>Wyloguj</button> 
        </div>
    );
}

export default LogoutButton;