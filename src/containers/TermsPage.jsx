import React from "react";
import { Link } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Page, Panel, DocxViewer } from "../components";

const TermsPage = () => {
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
			<Panel style="bootstrap-panel">
				<DocxViewer src={process.env.PUBLIC_URL + '/doc/Terms.docx'} />
			</Panel>
		</Page>
	);
};

export default TermsPage;
