import React from "react";
import { Link } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Page, Panel } from "../components";

const HomePage = () => {
	const renderBreadcrumbs = () => {
		return (
			<Breadcrumbs>
				<Link to="/">Home</Link>
				Welcome
			</Breadcrumbs>
		);
	};

	return (
		<Page actionBar={renderBreadcrumbs()} title="Welcome!">
			<Panel title="Biskuit Gem Workshop">
				The page you were looking for wasn't found!
			</Panel>
		</Page>
	);
};

export default HomePage;
