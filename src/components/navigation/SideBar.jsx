import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MenuList from "./MenuList";
import { initSidebarMenu } from "../../utils/navigation/menu-item-utils";

const Sidebar = props => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedMenuItem, setSelectedMenuItem] = useState({});
    const [pathToMenuItemMap, setPathToMenuItemMap] = useState({});

    useEffect(() => {
        if (menuItems.length <= 0) {
            const results = initSidebarMenu(props.location.pathname);
            setMenuItems(results.menuItems);
            setSelectedMenuItem(results.selected);
            setPathToMenuItemMap(results.pathToMenuItemMap);
        } else if (props.location.pathname in pathToMenuItemMap) {
            setSelectedMenuItem(pathToMenuItemMap[props.location.pathname]);
        }
    }, [props.location.pathname]);

    return (
        <div className={`sidebar ${props.showSidebar ? "" : "collapsed"}`}>
            {props.showSidebar && (
                <MenuList depth={1} items={menuItems} expanded={false} selectedItem={selectedMenuItem} />
            )}
        </div>
    );
};

Sidebar.propTypes = {
    location: PropTypes.object.isRequired,
    showSidebar: PropTypes.bool.isRequired,
};

export default withRouter(Sidebar);
