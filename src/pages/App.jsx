import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import NavContainer from "../components/navigation/NavContainer";
import { getRoutesFromConfig } from "../utils/navigation/menu-item-utils";

const App = () => {
  	return (
	    <div className="app">
			<Router basename={process.env.PUBLIC_URL}>
				<div className="app-header">
					<NavContainer />
				</div>
				<div className="app-main">
					<React.Suspense fallback="Loading Routes...">
						<Switch>
							<Route exact path="/" component={HomePage} />
							{getRoutesFromConfig().map((menuItem, idx) => {
								if (menuItem.component) {
									return <Route key={idx} exact path={menuItem.pathname} component={menuItem.component}/>;
								}
								return <Route key={idx} exact path={menuItem.pathname} render={menuItem.render}/>;
							})}
							<Route path="*" component={PageNotFound}/>
						</Switch>
					</React.Suspense>
				</div>
				<div className="app-footer" />
			</Router>
	    </div>
  	)
};

export default App;
