import React, { Component } from "react";
import { Link } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Page, Panel, DocxViewer } from "../components";

class PrivacyPage extends Component {
	renderBreadcrumbs = () => {
		return (
			<Breadcrumbs>
				<Link to="/">Home</Link>
				Privacy Policies
			</Breadcrumbs>
		);
	};

	render() {
		return (
			<Page actionBar={this.renderBreadcrumbs()} title="Privacy Policy">
				<Panel style="bootstrap-panel">
					<DocxViewer src={process.env.PUBLIC_URL + '/doc/Privacy.docx'} />
				</Panel>
			</Page>
		);
	};
};

export default PrivacyPage;
