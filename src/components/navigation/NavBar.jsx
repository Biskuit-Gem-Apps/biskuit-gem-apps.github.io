import PropTypes from "prop-types";
import React  from "react";
import { Link } from 'react-router-dom';

const NavBar = props => {


    return (
        <nav className="navbar">
            <Link to='/' className="navbar-logo">BiskuitGem</Link>
            <div className="navbar-bars" onClick={() => props.toggleSidebar()}>
                <i className={props.showSidebar ? "fa fa-times" : "fa fa-bars"}/>
            </div>
            <div className="navbar-menus">
                <Link to='/projects' className="navbar-menus-link">Projects</Link>
                <Link to='/support' className="navbar-menus-link">Support</Link>
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    showSidebar: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default NavBar;