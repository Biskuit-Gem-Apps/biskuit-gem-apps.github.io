import { combineReducers } from "redux";
import applicationReducer from "./application/application-reducer";
import navigationReducer from "./navigation/navigation-reducer";
import docxReducer from "./utility/docx-reducer";

const rootReducer = combineReducers({
	application: applicationReducer,
	navigation: navigationReducer,
	docx: docxReducer,
});

export default rootReducer;