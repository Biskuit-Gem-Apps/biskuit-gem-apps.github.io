import PropTypes from "prop-types";
import React from "react";

const Page = props => {
    return (
        <div className="app-content">
            {props.title && (
                <div className="content-top clearfix">
                    <h1 className="page-title">{props.title}</h1>
                </div>
            )}
            <div>
                {props.children}
            </div>
        </div>
    );
};

Page.propTypes = {
    title: PropTypes.string,
};

export default Page;
