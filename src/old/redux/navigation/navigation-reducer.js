import { 
	CLOSE_SIDEBAR_MENU, 
	OPEN_SIDEBAR_MENU, 
	TOGGLE_SIDEBAR_MENU,
	LOAD_SIDEBAR_MENU,
	UPDATE_MENU_SELECTION
} from "../action-type";
import { loadSidebarMenu } from "../../helper/menu-item-processor";

// load sidebar menu on page load
const initialLoadSidebarMenu = (state, currentPath) => {
	const { menuItems, selected } = loadSidebarMenu(currentPath);
	return {
		...state,
		menuItems,
		selectedItem: selected,
		isMenuLoaded: true,
	};
};

const initialState = {
	menuItems: [],
	selectedItem: {},
	isMenuOpen: true,
	isMenuLoaded: false,
};

const navigationReducer = (state = initialState, action) => {
	switch (action.type) {
		case CLOSE_SIDEBAR_MENU: 
			return {
				...state,
				isMenuOpen: false,
			};
		case OPEN_SIDEBAR_MENU: 
			return {
				...state,
				isMenuOpen: true,
			};
		case TOGGLE_SIDEBAR_MENU:
			return {
				...state,
				isMenuOpen: !state.isMenuOpen,
			};
		case LOAD_SIDEBAR_MENU:
			return initialLoadSidebarMenu(state, action.payload); // payload = currentPath
		case UPDATE_MENU_SELECTION:
			return {	
				...state,
				selectedItem: action.payload, // payload = selectedItem
			};
		default:
			return state;
	}
};

export default navigationReducer; 
