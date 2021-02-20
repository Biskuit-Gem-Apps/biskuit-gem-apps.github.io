import { SIDEBAR_MENU } from "./menu-item-config";

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
                    break;
                }
            }
        }
    }
    return selected;
};

export const initSidebarMenu = currentPath => {
    const menuItems = SIDEBAR_MENU;
    const pathToMenuItemMap = {};
    const selected = setSidebarMenuState(menuItems, pathToMenuItemMap, currentPath);
    return { menuItems, pathToMenuItemMap, selected };
};
