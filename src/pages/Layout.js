import {Outlet} from "react-router-dom";
import Navigation from "../components/Navigation";
import React from "react";

;

const Layout = () => {
    return (
        <>
            <Navigation></Navigation>
            <Outlet/>
            <footer>Le bas de ma page</footer>
        </>
    )
};

export default Layout;