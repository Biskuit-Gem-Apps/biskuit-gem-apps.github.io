import { LOAD_WEBSITE, LOAD_WEBSITE_SUCCESS } from "../action-type";

const initialState = {
	pageLoaded: true,
};

const applicationReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_WEBSITE: 
			return {
				pageLoaded: false,
			};
		case LOAD_WEBSITE_SUCCESS:
			return {	
				pageLoaded: true,
			};
		default:
			return state;
	};
};

export default applicationReducer; 
