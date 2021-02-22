import React from "react";
import AliceCarousel from 'react-alice-carousel';
import Page from "../../components/Page";
import image1 from "../../assets/img/wit_screenshot1.png";
import image2 from "../../assets/img/wit_screenshot2.png";
import image3 from "../../assets/img/wit_screenshot3.png";
import image4 from "../../assets/img/wit_screenshot4.png";
import image5 from "../../assets/img/wit_screenshot5.png";

const WITPage = () => {
    const galleryImages = [image1, image2, image3, image4, image5];

    return (
        <Page title="Workout Interval Timer (Mobile App)">
            <p>
                Workout Interval Timer is a simple customizable timer application.
                The general purpose is for you to have customized your timer as well as to do
                some simple logging. Currently only the Android version is available in the Google PlayStore.
            </p>
            <div style={{ height: '40px'}}>
                <ul className="app-socicon">
                    <li><a href="#"><i className="socicon socicon-android" /></a></li>
                    <li><a href="#"><i className="socicon socicon-apple" /></a></li>
                </ul>
            </div>
            <AliceCarousel
                autoPlayInterval={2000}
                autoHeight={true}
                autoPlay={true}
                fadeOutAnimation={true}
                mouseTracking={true}>
                {galleryImages.map((image, idx) => <img src={image} alt={`screenshot ${idx}`} key={idx} /> )}
            </AliceCarousel>
        </Page>
    );
};

export default  WITPage;