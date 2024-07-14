import React from 'react';
import Navbar from "./navbar";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

function Layout(props:any) {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;