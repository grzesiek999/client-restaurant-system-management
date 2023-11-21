import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../router/RouterPath";

const AdminPanel = () => {

    return (
        <Link to={ROUTER_PATH.ADD_WORKER}>Dodaj pracownika</Link>
    );
}

export default AdminPanel;