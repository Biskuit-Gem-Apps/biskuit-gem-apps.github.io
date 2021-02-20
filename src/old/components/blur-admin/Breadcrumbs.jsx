import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const Breadcrumbs = props => {
	const renderBreadcrumbs =() => {
		let breadcrumbs = props.children;
		if (!_.isArray(breadcrumbs)) {
			breadcrumbs = [breadcrumbs];
		}
		return _.map(breadcrumbs, (breadcrumb, key) => {
			return (
				<li key={key}>{breadcrumb}</li>
			);
		});

	};

	return (
		<ul className="breadcrumb al-breadcrumb">
			{ renderBreadcrumbs() }
		</ul>
	);
};

PropTypes.defaultProps = {
	className: '',
};

Breadcrumbs.propTypes = {
	className: PropTypes.string,
};

export default Breadcrumbs;
