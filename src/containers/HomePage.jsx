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
		<Page actionBar={renderBreadcrumbs()} title="Biskuit Gem Workshop">
			<Panel title="Hello!">
				<p>We are a small team of individual developers that loves to develop application, games and websites. All of the products under BiskuitGem are created with love from our developers during our free time. We are definitely not professionals and are doing this as a hobby. As much as we can, we will try to respond to feedback and fix any issues with our products. Hence, we hope you love our products as much as we do!</p>
			</Panel>

			<div className="row">
				<div className="col-lg-8 col-md-12 col-sm-12">
					<Panel title="Our name: BiskuitGem">
						<p>Here is a little history on how we came up with our name “BiskuitGem”. Do a quick google on “iced gem biscuit” and you will find this colourful snack. This is one of our all-time favourite snack when we were young. To us, this is a nostalgic and colourful snack which we love. If you have yet to try it, do get it! Its a simple and delicious snack which never fails to bring a smile to our face!</p>
						<p>As developers, not only do we want to enjoy developing products and solutions, we also want people who use our products to enjoy them as much as we do. At BiskuitGem, we want our developers to enjoy the little things in life which makes us happy. Memories of this snack popped up in our mind as we were finding stuff which makes us happy. Hence, this is how we decided on our name!</p>
					</Panel>
				</div>
				<div className="col-lg-4 col-md-12 col-sm-12">
					<Panel>
						<div className="img-wrapper">
							<img src={process.env.PUBLIC_URL + "/gem.jpg"} />
						</div>
					</Panel>
				</div>
			</div>
		</Page>
	);
};

export default HomePage;
