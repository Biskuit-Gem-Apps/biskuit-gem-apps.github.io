import React from 'react';
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="app-landing">
            <div className="landing-text">
                <h2>Welcome! <br /> to <span>Biskuit Gem</span> Workspace <span>^^</span></h2>
                <p>Hi, I am Ben Koh, creator of Biskuit Gem. We are a small team of individual developers who are
                    passionate in software development and solutioning. Biskuit Gem Workspace is a space for us
                    to explore and develop applications, games, libraries and websites in our own time. Do checkout some
                    of our works!</p>
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