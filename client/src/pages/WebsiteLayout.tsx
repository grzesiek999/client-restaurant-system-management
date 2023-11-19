import React from "react";
import WebsiteLayoutMenu from "../components/organisms/Layout/WebsiteLayoutMenu";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
    return(
        <>
          <WebsiteLayoutMenu />
            <Outlet />
        </>
    );
}

export default WebsiteLayout;