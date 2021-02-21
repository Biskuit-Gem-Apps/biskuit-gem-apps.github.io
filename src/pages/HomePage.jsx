import React from 'react';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="app-landing">
            <div className="landing-text">
                <h2>Welcome! <br /> to <span>Biskuit Gem</span> Workspace <span>^^</span></h2>
                <p>We are a small team of individual developers that loves to develop applications, games and websites.</p>
                <Link to="/about">Learn More</Link>
            </div>
            <div className="landing-image">
                <img src={logo} alt="logo" />
            </div>
            <ul className="landing-socicons">
                <li><a href="https://github.com/biskuitgem"><i className="socicon socicon-github" /></a></li>
                <li><a href="#"><i className="socicon socicon-android" /></a></li>
                <li><a href="#"><i className="socicon socicon-apple" /></a></li>
            </ul>
        </div>
    );
};

export default HomePage;