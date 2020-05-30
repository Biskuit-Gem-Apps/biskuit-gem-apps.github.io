import { 
	CLOSE_SIDEBAR_MENU, 
	OPEN_SIDEBAR_MENU, 
	TOGGLE_SIDEBAR_MENU,
	LOAD_SIDEBAR_MENU,
	UPDATE_MENU_SELECTION
} from "../action-type";

export const closeSidebarMenu = () => ({
	type: CLOSE_SIDEBAR_MENU,
});

export const openSidebarMenu = () => ({
	type: OPEN_SIDEBAR_MENU,
});

export const toggleSidebarMenu = () => ({
	type: TOGGLE_SIDEBAR_MENU,
});

export const loadSidebarMenu = currentPath => ({
	type: LOAD_SIDEBAR_MENU,
	payload: currentPath,
});

export const updateSidebarSelection = selectedItem => ({
	type: UPDATE_MENU_SELECTION,
	payload: selectedItem,
});