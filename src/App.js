import React from 'react';
import { Provider } from "react-redux";

// Import CSS
import './assets/styles/app.scss';

// Import Router
import AppRouter from "./AppRouter";

// Import Redux Store
import configureStore from "./redux/store";
const store = configureStore();

const App = props => {
  	return (
	    <div className="App">
    		<Provider store={store}>
		    	<AppRouter />
		    </Provider>
	    </div>
  	)
};

export default App;
