import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";
import ProjectList from "./ProjectList";
import NavContainer from "../components/navigation/NavContainer";

// Import Redux Store
import configureStore from "../redux/root-store";
const store = configureStore();

const App = () => {
  	return (
	    <div className="app">
    		<Provider store={store}>
				<Router>
					<NavContainer />
					<div className="app_content">
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/projects" component={ProjectList} />
							<Route path="*" component={PageNotFound}/>
						</Switch>
					</div>
				</Router>
		    </Provider>
	    </div>
  	)
};

export default App;
