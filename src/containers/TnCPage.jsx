import React from "react";
import { Link } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Page, Panel } from "../components";

const TnCPage = () => {
	const renderBreadcrumbs = () => {
		return (
			<Breadcrumbs>
				<Link to="/">Home</Link>
				Terms and Conditions
			</Breadcrumbs>
		);
	};

	return (
		<Page actionBar={renderBreadcrumbs()} title="Terms and Conditons">

		</Page>
	);
};

export default TnCPage;
