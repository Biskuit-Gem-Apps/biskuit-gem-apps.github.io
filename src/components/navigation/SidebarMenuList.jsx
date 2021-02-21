import React from 'react';
import PropTypes from "prop-types";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenuList = props => {
    return (
        <ul className={`${props.depth === 1 ? 'my-sidebar-list' : 'my-sidebar-sublist' } ${props.expanded ? 'expanded' : ''}`}>
            {props.items.map((menuItem, idx) => (
                <SidebarMenuItem depth={props.depth} item={menuItem} selectedItem={props.selectedItem} key={idx} />
            ))}
        </ul>
    )
};

SidebarMenuList.propTypes = {
    depth: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    expanded: PropTypes.bool.isRequired,
    selectedItem: PropTypes.object.isRequired,
};

export default SidebarMenuList;