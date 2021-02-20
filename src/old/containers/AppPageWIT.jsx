import React from "react";
import { Link } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Page, Panel } from "../components";

const AppPageWIT = () => {
	const renderBreadcrumbs = () => {
		return (
			<Breadcrumbs>
				<Link to="/">Home</Link>
				App
				WIT
			</Breadcrumbs>
		);
	};

	return (
		<Page actionBar={renderBreadcrumbs()} title="Workout Interval Timer">

		</Page>
	);
};

export default AppPageWIT;
