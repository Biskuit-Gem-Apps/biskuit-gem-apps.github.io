import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from "react-redux"; 

// Import Components
import { Loading } from "../index";

// Import Actions
import { loadDocx } from "../../redux";

class DocxViewer extends Component {
	constructor(props) {
		super(props);
		props.loadDocx(props.src);
	}

	render() {
		if (!this.props.isDocxLoaded) {
			return (
				<Loading />
			);
		}

		return (
			<div dangerouslySetInnerHTML={{ __html: this.props.docxContent }}/>
		);
	};
};

DocxViewer.propTypes = {
	src: PropTypes.string.isRequired,
	isDocxLoaded: PropTypes.bool.isRequired,
	loadDocx: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isDocxLoaded: state.docx.isDocxLoaded,
	docxContent: state.docx.docxContent,
});

const mapDispatchToProps = dispatch => ({
	loadDocx: source => dispatch(loadDocx(source)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocxViewer);
