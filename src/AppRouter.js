import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Import Components
import { Navbar, Sidebar } from "./components";
import { HomePage, TnCPage, WITPrivacyPage, NotFound } from "./containers";

const AppRouter = props => {
	return (
    	<Router>
	    	<main className={props.isMenuOpen ? "" : "menu-collapsed"}>
	    		<Sidebar />
    			<Navbar />

    			<div className="al-main">
    				<div className="al-content">
    					<Switch>
					        <Route exact path="/" component={HomePage} />
				            <Route path="/privacy-policies/workout-interval-timer" component={WITPrivacyPage} />
				            <Route path="/terms-and-conditions" component={TnCPage} />
				            <Route path="*" component={NotFound}/>
				       	</Switch>
    				</div>
    			</div>

    			<footer className="al-footer clearfix">
    				<div className="al-footer-right">Created with <i className="ion-heart"></i></div>
    				<div className="al-footer-main clearfix">
		            	<div className="al-copy">&copy; <a href="http://akveo.com/">Akveo</a> 2016</div>
		             	<ul className="al-share clearfix">
		                	<li><i className="socicon socicon-facebook"></i></li>
		                	<li><i className="socicon socicon-twitter"></i></li>
		                	<li><i className="socicon socicon-google"></i></li>
		                	<li><i className="socicon socicon-github"></i></li>
		              	</ul>
		            </div>
    			</footer>
    			<back-top></back-top>
	    	</main>
    	</Router>
	);
};

AppRouter.propTypes = {
	isMenuOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	isMenuOpen: state.navigation.isMenuOpen,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
