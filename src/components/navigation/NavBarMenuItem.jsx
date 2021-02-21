import PropTypes from "prop-types";
import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import NavbarDropdown from "./NavBarDropdown";

const NavBarMenuItem = props => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        if (props.item.items) {
            setShowDropdown(!showDropdown);
        }
    };

    const handleMenuItemClick = e => {
        if (props.item.items) {
            e.preventDefault();
        } else {
            props.history.push(props.item.pathname);
        }
    }

    return (
        <li className="my-navbar-menu-item" onClick={toggleDropdown} onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <Link to={props.item.pathname} className="my-navbar-menu-item-link" onClick={handleMenuItemClick}>
                {props.item.label} {props.item.items && (
                    <i className={`fas ${showDropdown ? "fa-caret-up" : 'fa-caret-down'}`} />
                )}
            </Link>
            {props.item.items && <NavbarDropdown showDropdown={showDropdown} items={props.item.items} closeDropdown={toggleDropdown} />}
        </li>
    );
};

NavBarMenuItem.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
};

export default withRouter(NavBarMenuItem);
