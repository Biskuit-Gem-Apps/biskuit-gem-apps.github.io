import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from "react-redux"; 
import { withRouter } from 'react-router-dom';

// Import Components
import MenuList from "./MenuList";
// Import Action
import { loadSidebarMenu } from "../../redux";


const Sidebar = props => {

	// on intial load (load the sidebar menu based on url state)
	useEffect(() => {
		props.loadSidebarMenu(props.location.pathname);
	}, []);

	return (
		<aside className="al-sidebar">
			{ props.isMenuLoaded && <MenuList depth={1} items={props.menuItems} expanded={""} /> }
		</aside>
	);
};

Sidebar.propTypes = {
	isMenuLoaded: PropTypes.bool.isRequired,
	menuItems: PropTypes.array.isRequired,
	location: PropTypes.object.isRequired,
	loadSidebarMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isMenuLoaded: state.navigation.isMenuLoaded,
	menuItems: state.navigation.menuItems,
});

const mapDispatchToProps = dispatch => ({
	loadSidebarMenu: currentPath => dispatch(loadSidebarMenu(currentPath)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sidebar));
