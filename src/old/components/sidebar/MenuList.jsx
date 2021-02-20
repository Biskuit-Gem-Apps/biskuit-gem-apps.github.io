import _ from "lodash";
import PropTypes from 'prop-types';
import React from "react";

// Import Components
import MenuItem from "./MenuItem";

const MenuList = props => {
	const listClass = (props.depth === 1) ? "al-sidebar-list" : `al-sidebar-sublist ${props.expanded}`;

	const renderLinks = () => {
		return _.map(props.items, navItem => {
			return <MenuItem depth={props.depth} item={navItem} key={navItem.id}/>
		});
	};

	return (
		<ul className={listClass}>
	        {renderLinks()}
	   	</ul>
	);
};

MenuList.propTypes = {
	depth: PropTypes.number.isRequired,
	items: PropTypes.array.isRequired,
	expanded: PropTypes.string.isRequired, // either "expanded" or ""
};

export default MenuList;