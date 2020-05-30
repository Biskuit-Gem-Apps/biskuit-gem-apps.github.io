import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger"
import rootReducer from "./root-reducer";

const configureStore = () => {
	const middlewares = [
		logger,
		thunkMiddleware
	];

	const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
	return store;
}

export default configureStore;