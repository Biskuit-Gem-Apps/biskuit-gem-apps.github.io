import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./root-reducer";

const configureStore = () => {
	const middlewares = [
		thunkMiddleware
	];

	const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
	return store;
}

export default configureStore;