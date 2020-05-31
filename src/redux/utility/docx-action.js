import { LOAD_DOCX, LOAD_DOCX_SUCCESS } from "../action-type";
const loadDocxRequest = () => ({
	type: LOAD_DOCX,
});

const loadDocxSuccess = html => ({
	type: LOAD_DOCX_SUCCESS,
	payload: html
});


export const loadDocx = (source) => dispatch => {
	dispatch(loadDocxRequest()); // set loading to true

	return fetch(source)
		.then(res => {
			return res.arrayBuffer();
		})
		.then(data => {
			const mammoth = require("mammoth");
			mammoth.convertToHtml({ arrayBuffer: data })
			    .then(function(result){
			        const html = result.value; // The generated HTML
			        const messages = result.messages; // Any messages, such as warnings during conversion
			        dispatch(loadDocxSuccess(html));
			    })
		    	.done();
		});
};