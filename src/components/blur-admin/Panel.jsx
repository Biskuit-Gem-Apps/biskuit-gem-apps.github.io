import PropTypes from 'prop-types';
import React from 'react';

const Panel = props => {
	const renderHeader = () => {
		if (!props.title) {
			return null;
		}
		return (
			<div className="panel-heading clearfix">
				<h3 className="panel-title">
					{props.title}
				</h3>
			</div>
		);
	};

	const renderPanelSize = () => {
		switch (props.size) {
			case "xs":
			case "extra-small":
				return "xsmall-panel";
			case "sm":
			case "small":
				return "small-panel";
			case "md":
			case "medium":
				return "medium-panel";
			case "lg":
			case "large":
				return "large-panel";
			case "auto":
			case "none":
			default:
				return "";
		}
	};

	return (
		<div className={`panel panel-blur ${renderPanelSize()} light-text ${props.withScroll ? 'with-scroll' : ''} ${props.className}`}>
			{renderHeader()}
			<div className="panel-body">
				{props.children}
			</div>
		</div>
	);
};

PropTypes.defaultProps = {
	className: '',
    size: 'auto',
    withScroll: false,
};

Panel.propTypes = {
	title: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.string,
    withScroll: PropTypes.bool,
};

export default Panel;
