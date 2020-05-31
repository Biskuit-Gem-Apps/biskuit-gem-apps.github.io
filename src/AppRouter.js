import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Import Components
import { Navbar, Sidebar } from "./components";
import { HomePage, TermsPage, PrivacyPage, NotFound, AppPageWIT } from "./containers";
import PortalLoading from "./PortalLoading";

// Import Actions
import { loadWebsite, loadWebsiteComplete } from "./redux";

class AppRouter extends Component {
	constructor(props) {
		super(props);
		this.props.loadWebsite();
	};

	componentDidMount() {
		setTimeout(() => {
			this.props.loadWebsiteComplete();
		}, 1000);
	}

	render() {
		if (!this.props.pageLoaded) {
			return <PortalLoading />;
		}

		return (
	    	<Router>
		    	<main className={this.props.isMenuOpen ? "" : "menu-collapsed"}>
		    		<Sidebar />
	    			<Navbar />

	    			<div className="al-main">
	    				<div className="al-content">
	    					<Switch>
						        <Route exact path="/" component={HomePage} />
					            <Route path="/privacy-policies" component={PrivacyPage} />
					            <Route path="/terms-and-conditions" component={TermsPage} />
					            <Route path="/app/workout-interval-timer" component={AppPageWIT} />
					            <Route path="*" component={NotFound}/>
					       	</Switch>
	    				</div>
	    			</div>

	    			<footer className="al-footer clearfix">
	    				<div className="al-footer-right">Created with <i className="fa fa-heart"/></div>
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
};

AppRouter.propTypes = {
	isMenuOpen: PropTypes.bool.isRequired,
	pageLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	isMenuOpen: state.navigation.isMenuOpen,
	pageLoaded: state.application.pageLoaded,
});

const mapDispatchToProps = dispatch => ({
	loadWebsite: () => dispatch(loadWebsite()),
	loadWebsiteComplete: () => dispatch(loadWebsiteComplete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
