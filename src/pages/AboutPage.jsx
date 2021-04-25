import React from "react";
import Page from "../components/Page";
import gems from "../assets/img/gems.png";

const AboutPage = () => {
    return (
        <Page title="About Us">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <p>Biskuit Gem Workspace is a collection of projects and works by us as part of our journey to pick up
                        software development. A short history on how we came up with the name <b>"BiskuitGem"</b> is that if
                        you do a quick google on "Fancy Gem Biscuits", you will find this colourful snack which is on of our
                        all-time favourite snack when we were young. To us, this is a nostalgic snack filled with memories that
                        never fail to bring a smile to our face :)</p>
                    <p>As developers, not only do we want to enjoy developing products and solutions, we also
                        want people who use our products to enjoy them as much as we do. At BiskuitGem, we want
                        our developers to enjoy the little things in life which makes us happy. Memories of this
                        snack popped up in our mind as we were finding stuff which makes us happy. Hence, this is
                        how we decided on our name!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <p><img src={gems} alt="gems" width="100%" height="auto" /></p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3>Our Works</h3>
                    <p>Coming Soon....</p>
                </div>
            </div>
        </Page>
    );
};

export default AboutPage;
