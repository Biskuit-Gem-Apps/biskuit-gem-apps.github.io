import PropTypes from 'prop-types';
import React from "react";

const Row = props => {
	return (
		<div className={props.align === 'left' ? 'flexbox' : 'flexbox-right'}>
			{props.children}
		</div>
	);
}

PropTypes.defaultProps = {
	align: 'left',
};

Row.propTypes = {
    align: PropTypes.string, // left or right
};

export default Row;
