import _ from "lodash";

/* CSS only supports up to 3 layers
 *		- try to keep the label name short
 * 		- icons only shown for first 2 layers
 *		- items with submenu doesn't really need pathname
 */
const DEFAULT_MENU = [
	{
		id: _.uniqueId("nav_"),
		pathname: '/',
		label: 'Home',
		icon: 'home',
	},
	{
		id: _.uniqueId("nav_"),
		pathname: "/app",
		label: 'Applications',
		icon: 'rocket',
		items: [
			{
				id: _.uniqueId("nav_"),
				pathname: '/app/workout-interval-timer',
				label: 'WIT',
				icon: 'stopwatch',
			}
		],
		expanded: false,
	},
	{
		id: _.uniqueId("nav_"),
		pathname: '/privacy-policies',
		label: 'Privacy Policy',
		icon: 'shield-alt',
	},
	{
		id: _.uniqueId("nav_"),
		pathname: '/terms-and-conditions',
		label: 'Terms and Conditons',
		icon: 'file-signature',
	}
];

const setSidebarMenuState = (menuItems, currentPath) => {
	let selected = {};
	let item;
	for (item of menuItems) {
		if (item.pathname === currentPath) {
			selected = item;
			break;
		} else {
			if (item.items) {
				const result = setSidebarMenuState(item.items, currentPath);
				if (!_.isEmpty(result)) {
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

export const loadSidebarMenu = currentPath => {
	const menuItems = _.cloneDeep(DEFAULT_MENU);
	const selected = setSidebarMenuState(menuItems, currentPath);
	return { menuItems, selected };
};
