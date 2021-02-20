import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./root-reducer";

const configureStore = () => {
	const middlewares = [
		thunkMiddleware
	];

	return createStore(rootReducer, compose(applyMiddleware(...middlewares)));
}

export default configureStore;