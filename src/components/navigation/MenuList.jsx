import React from 'react';
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const MenuList = props => {
    return (
        <ul className={`${props.depth === 1 ? 'sidebar-list' : 'sidebar-sublist' } ${props.expanded ? 'expanded' : ''}`}>
            {props.items.map((menuItem, idx) => (
                <MenuItem depth={props.depth} item={menuItem} selectedItem={props.selectedItem} key={idx} />
            ))}
        </ul>
    )
};

MenuList.propTypes = {
    depth: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    expanded: PropTypes.bool.isRequired,
    selectedItem: PropTypes.object.isRequired,
};

export default MenuList;