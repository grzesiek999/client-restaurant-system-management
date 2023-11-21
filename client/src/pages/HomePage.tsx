import React, { useContext } from "react";
import { UserAuth } from "../context/UserDataContext";
import { Navigate } from "react-router-dom";
import { SESSION } from "../constant/UserSession";


const HomePage = () => {

    const {user} = useContext(UserAuth);
    if(user){ return <Navigate to={SESSION.USER} /> }
     
    return(
        <div>Witaj w aplikacji do zarządzania restauracja</div>
    );
}

export default HomePage;