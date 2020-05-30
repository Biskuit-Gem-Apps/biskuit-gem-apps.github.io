import PropTypes from 'prop-types';
import React from 'react';

const Page = props => {
	return (
		<div>
			<div className="content-top clearfix">
				<h1 className="al-title">{props.title}</h1>
				{props.actionBar}
			</div>
			{props.children}
		</div>
	);
};

Page.propTypes = {
	title: PropTypes.string,
	actionBar: PropTypes.node,
};

export default Page;
