import React from "react";
import BasicNavbar from "./BasicNavbar";

const Layout = (props) => {
    return(
        <div>
            <BasicNavbar/>
            {props.children}
        </div>
    );
};

export default Layout;