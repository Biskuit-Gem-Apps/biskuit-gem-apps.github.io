import PropTypes from "prop-types";
import React, { useEffect, useState }  from "react";
import { Link } from 'react-router-dom';
import NavBarMenuItem from "./NavBarMenuItem";
import logo from "../../assets/logo.png";
import { initNavbarMenu } from "../../utils/navigation/menu-item-utils";

const NavBar = props => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(initNavbarMenu());
    }, []);

    return (
        <nav className="navbar">
            <Link to='/' className="navbar-logo">
                <img src={logo} alt="logo" />
                Biskuit<span>Gem</span>
            </Link>
            <div className="navbar-bars" onClick={() => props.toggleSidebar()}>
                <i className={props.showSidebar ? "fa fa-times" : "fa fa-bars"}/>
            </div>
            <ul className="navbar-menu">
                {menuItems.map((menuItem, idx) => <NavBarMenuItem key={idx} item={menuItem} />)}
            </ul>
        </nav>
    );
};

NavBar.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default NavBar;