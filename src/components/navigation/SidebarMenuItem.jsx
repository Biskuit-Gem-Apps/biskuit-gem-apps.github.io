import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import SidebarMenuList from "./SidebarMenuList";

const SidebarMenuItem = props => {
    const [menuItem, setMenuItem] = useState(props.item);
    const [listClass, setListClass] = useState("");

    useEffect(() => {
        const subMenuClass = menuItem.items ? "with-sub-menu" : "";
        const isSelected = menuItem.items ? "" : (props.location.pathname === menuItem.pathname ? 'selected' : "");
        setListClass(`my-sidebar-list-item ${subMenuClass} ${isSelected}`);
    }, [menuItem, props.selectedItem]);

    const handleOnLinkClicked = e => {
        if (menuItem.items) {
            e.preventDefault();
            // simply toggling the menu Item
            setMenuItem({
                ...menuItem,
                expanded: !menuItem.expanded,
            });
        } else {
            props.toggleSidebar();
            props.history.push(menuItem.pathname);
        }
    };

    return (
        <li className={listClass} key={menuItem.label}>
            <Link className="my-sidebar-list-link" to={menuItem.pathname} onClick={handleOnLinkClicked}>
                <i className={`fa fa-${menuItem.icon}`}/>
                <span>{menuItem.label}</span>
                {menuItem.items && (
                    <b className={`fa ${menuItem.expanded ? "fa-angle-up" : "fa-angle-down"}`}/>
                )}
            </Link>
            {menuItem.items && (
                <SidebarMenuList depth={props.depth + 1} items={menuItem.items} expanded={menuItem.expanded} selectedItem={props.selectedItem} toggleSidebar={props.toggleSidebar} />
            )}
        </li>
    );
};

SidebarMenuItem.propTypes = {
    depth: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    selectedItem: PropTypes.object.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default withRouter(SidebarMenuItem);