import React from "react";
import { Link } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Page, Panel } from "../components";

const WITPrivacyPage = () => {
	const renderBreadcrumbs = () => {
		return (
			<Breadcrumbs>
				<Link to="/">Home</Link>
				Privacy Policies
				WIT
			</Breadcrumbs>
		);
	};

	return (
		<Page actionBar={renderBreadcrumbs()} title="Workout Interval Timer Privacy Policy">

		</Page>
	);
};

export default WITPrivacyPage;
