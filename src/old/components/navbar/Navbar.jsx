import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

// Import Action
import { toggleSidebarMenu } from "../../redux";

const Navbar = props => {
	// eslint-disable-next-line
	const [appName, setAppName] = useState("BiskuitGem");

	const onToggleMenu = () => {
		props.toggleMenu();
	};

	const renderHamburgerMenu = () => {
		return (
			<a className="collapse-menu-link" onClick={onToggleMenu}>
				<i className="fa fa-bars"/>
			</a>
		);
	};

	const renderLogo = () => {
		return <Link to='/' className="al-logo clearfix">{appName}</Link>
	};

	return (
		<div className="page-top clearfix" scroll-position="scrolled" max-height="50">
			{renderLogo()}
			{renderHamburgerMenu()}
		</div>
	);
};

Navbar.propTypes = {
	toggleMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({ 
	toggleMenu: () => dispatch(toggleSidebarMenu()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
