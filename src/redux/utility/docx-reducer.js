import { LOAD_DOCX, LOAD_DOCX_SUCCESS } from "../action-type";

const initialState = {
	isDocxLoaded: false,
	docxContent: null,
};

const docxReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_DOCX: 
			return {
				isDocxLoaded: false,
				docxContent: null,
			};
		case LOAD_DOCX_SUCCESS:
			return {
				isDocxLoaded: true,
				docxContent: action.payload,
			};
		default:
			return state;
	}
};

export default docxReducer; 
