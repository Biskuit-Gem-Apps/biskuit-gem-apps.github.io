import React, { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./SideBar";

const NavContainer = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <React.Fragment>
            <NavBar showSidebar={showSidebar} toggleSidebar={handleToggleSidebar} />
            <Sidebar showSidebar={showSidebar} toggleSidebar={handleToggleSidebar} />
        </React.Fragment>
    );
};

export default NavContainer;
