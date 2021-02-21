import React from "react";
import Page from "../components/Page";

const AboutPage = () => {
    return (
        <Page title="About Us">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <p>Here is a little history on how we came up with our name “BiskuitGem”. Do a quick google on “iced gem biscuit” and you will find this colourful snack. This is one of our all-time favourite snack when we were young. To us, this is a nostalgic and colourful snack which we love. If you have yet to try it, do get it! Its a simple and delicious snack which never fails to bring a smile to our face!</p>
                    <p>As developers, not only do we want to enjoy developing products and solutions, we also want people who use our products to enjoy them as much as we do. At BiskuitGem, we want our developers to enjoy the little things in life which makes us happy. Memories of this snack popped up in our mind as we were finding stuff which makes us happy. Hence, this is how we decided on our name!</p>
                </div>
            </div>
        </Page>
    );
};

export default AboutPage;
