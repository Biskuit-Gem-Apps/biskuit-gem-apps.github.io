import PropTypes from 'prop-types';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

// Import Components
import MenuList from "./MenuList";

// Import Action
import { updateSidebarSelection } from "../../redux";

class MenuItem extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.selectedItem !== nextProps.selectedItem) {
			// re-render the previous one and the current one
			if (this.props.item.id === this.props.selectedItem.id) {
				return true;
			} else if (this.props.item.id === nextProps.selectedItem.id) {
				return true;
			}
		}
		return false;
	};

	onLinkClicked = (e, navItem) => {
		if (navItem.items) {
			// simply toggling the menu Item
			e.preventDefault();
			navItem.expanded = !navItem.expanded; // weird behaviour that this updates the redux store directly (instead of dispatching an action)
			this.forceUpdate();
		} else {
			// set selection
			this.props.updateSidebarSelection(navItem);
		}
	};

	render() {
		const navItem = this.props.item;
		let icon = null, dropArrow = null, subMenu = null;
		let itemClass = "", linkClass = "", subMenuClass = "", isSelected = "", subSubMenuClass = "";

		// only applicable to first layer Menu Item
		if (this.props.depth < 3) {
			itemClass = "al-sidebar-list-item";
			linkClass = 'al-sidebar-list-link';
			icon = <i className={`fa fa-${navItem.icon}`}/>;
		}

		// only applicable to third layer Menu Item (max)
		if (this.props.depth === 3) {
			subSubMenuClass = "subitem-submenu-link";
		}

		// only applicable to menu item with sub menu
		if (navItem.items) {
			dropArrow = <b className={`fa ${navItem.expanded ? "fa-angle-up" : "fa-angle-down"}`}/>;
			subMenu = <MenuList depth={this.props.depth + 1} items={navItem.items} expanded={navItem.expanded ? "expanded" : ""} />
			subMenuClass = "with-sub-menu";
		} else {
			isSelected = this.props.location.pathname === navItem.pathname ? 'selected' : '';
		}

		return (
			<li className={`${itemClass} ${subMenuClass} ${isSelected}`} key={navItem.id}>
				<Link className={`${linkClass} ${subSubMenuClass}`} to={navItem.pathname} onClick={e => this.onLinkClicked(e, navItem)}>
					{icon}
					<span>{navItem.label}</span>
					{dropArrow}
				</Link>
				{subMenu}
			</li>
		);
	};
};

MenuItem.propTypes = {
	depth: PropTypes.number.isRequired,
	item: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	selectedItem: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
	selectedItem: state.navigation.selectedItem,
});

const mapDispatchToProps = dispatch => ({
	updateSidebarSelection: selectedItem => dispatch(updateSidebarSelection(selectedItem)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuItem));
