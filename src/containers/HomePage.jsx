import React from "react";
import { Link } from 'react-router-dom';

// Import Components
import { Breadcrumbs, Page, Panel, Table } from "../components";

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
			<Panel title="Hello">
				<p>We are a small team of individual developers that loves to develop application, games and websites. All of the products under BiskuitGem are created out of love from our developers during our free time. We are definitely not professionals and are doing this as a hobby. As much as we can, we will try to respond to feedback and fix any issues with our products. Hence, we hope you love our products as much as we do!</p>
			</Panel>

			<Panel title="Our name: BiskuitGem">
				<p>Here is a little history on how we came up with our name “BiskuitGem”. Do a quick google on “iced gem biscuit” and you will find this colourful snack. This is one of our all-time favourite snack when we were young. It is simply, delicious and brings a smile to our face. As developers, not only do we want to enjoy developing products and solutions, we also want people who use our products to enjoy them as much as we do. Since this snack totally matches our motto at BiskuitGem where <strong>we enjoy the little things in life and doing whatever we love!</strong> We decided to use it as our name.</p>
			</Panel>
		</Page>
	);
};

export default HomePage;
