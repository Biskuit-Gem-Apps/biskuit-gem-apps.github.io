import React from 'react';
import { Link } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Page, Panel } from "../components";

const NotFound = () => {
	const renderBreadcrumbs = () => {
		return (
			<Breadcrumbs>
				<Link to="/">Home</Link>
				You're lost!
			</Breadcrumbs>
		);
	};

	return (
		<Page actionBar={renderBreadcrumbs()} title="404 Not Found">
			<Panel title="Page Not Found">
				The page you were looking for wasn't found!
			</Panel>
		</Page>
	);
};

export default NotFound;
