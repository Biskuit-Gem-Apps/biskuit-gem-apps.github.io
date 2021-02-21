import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import NavContainer from "../components/navigation/NavContainer";
import { getRoutesFromConfig } from "../utils/navigation/menu-item-utils";

// Import Redux Store
import configureStore from "../redux/root-store";
const store = configureStore();

const App = () => {
  	return (
	    <div className="app">
    		<Provider store={store}>
				<Router>
					<div className="app-header">
						<NavContainer />
					</div>
					<div className="app-main">
						<React.Suspense fallback="Accident Happened...">
							<Switch>
								<Route exact path="/" component={HomePage} />
								{getRoutesFromConfig().map((menuItem, idx) => (
									<Route key={idx} exact path={menuItem.pathname} component={menuItem.component} />
								))}
								<Route path="*" component={PageNotFound}/>
							</Switch>
						</React.Suspense>
					</div>
					<div className="app-footer" />
				</Router>
		    </Provider>
	    </div>
  	)
};

export default App;
