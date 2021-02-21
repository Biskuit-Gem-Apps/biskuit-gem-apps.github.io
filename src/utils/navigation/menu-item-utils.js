import { MENU_ITEMS } from "./menu-item-config";

const isEmptyObject = obj => obj && Object.keys(obj).length === 0 && obj.constructor === Object;

const setSidebarMenuState = (menuItems, pathToMenuItemMap, currentPath) => {
    let selected = {};
    let item;
    for (item of menuItems) {
        // add item to map
        pathToMenuItemMap[item.pathname] = item;
        // process item
        item.expanded = false; // default state
        if (item.pathname === currentPath) {
            selected = item;
            break;
        } else {
            if (item.items) {
                const result = setSidebarMenuState(item.items, pathToMenuItemMap, currentPath);
                if (!isEmptyObject(result)) {
                    // it is sub item (expand current item)
                    selected = result;
                    item.expanded = true;
                    // break;
                }
            }
        }
    }
    return selected;
};

export const initSidebarMenu = currentPath => {
    const menuItems = MENU_ITEMS;
    const pathToMenuItemMap = {};
    const selected = setSidebarMenuState(menuItems, pathToMenuItemMap, currentPath);
    return { menuItems, pathToMenuItemMap, selected };
};

export const initNavbarMenu = () => {
    return MENU_ITEMS;
};

const getRoutesFromMenuItem = (menuItems, results) => {
    let item;
    for (item of menuItems) {
        if (!item.noRoute) {
            results.push(item);
        }

        if (item.items) {
            getRoutesFromMenuItem(item.items, results);
        }
    }
};

export const getRoutesFromConfig = () => {
    const menuItems = MENU_ITEMS;
    const results = [];
    getRoutesFromMenuItem(menuItems, results);
    return results;
};