import PropTypes from 'prop-types';
import React from "react";

const Col = props => {

	const styles = {
		flex: (props.grow ? '1 ' : '0 ') + (props.shrink ? '1 ' : '0 ') + props.basis,
		textAlign: props.align,
		padding: props.padding, 
	}

	return (
		<div style={styles}>
			{props.children}
		</div>
	);
};

PropTypes.defaultProps = {
	grow: true,
	shrink: true,
	basis: 'auto', // also accepts '100px', '10%', etc.
	align: 'left',
	padding: 10,
};

Col.propTypes = {
	grow: PropTypes.bool,
    shrink: PropTypes.bool,
    basis: PropTypes.string,
    padding: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    align: PropTypes.string,
};

export default Col;
