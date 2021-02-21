import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const NavbarDropdown = props => {
    return (
        <ul className={`my-dropdown-menu ${props.showDropdown ? '' : 'collapsed'}`}>
            {props.items.map((menuItem, idx) => (
                <li key={idx} onClick={props.closeDropdown}>
                    <Link to={menuItem.pathname} className="my-dropdown-menu-link">
                        {menuItem.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

NavbarDropdown.propTypes = {
    items: PropTypes.array.isRequired,
    showDropdown: PropTypes.bool.isRequired,
    closeDropdown: PropTypes.func.isRequired,
};

export default NavbarDropdown;