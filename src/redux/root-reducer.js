import { combineReducers } from "redux";
import applicationReducer from "./application/application-reducer";
import navigationReducer from "./navigation/navigation-reducer";

const rootReducer = combineReducers({
	application: applicationReducer,
	navigation: navigationReducer,
});

export default rootReducer;