import PropTypes from "prop-types";
import React from "react";
import Page from "../../components/Page";
import DocxViewer from "../../components/documents/DocxViewer";

const ViewDocxPage = props => {
    return (
        <Page title={props.title}>
            <div className="panel panel-default">
                <div className="panel-body">
                    <DocxViewer src={process.env.PUBLIC_URL + '/doc/' + props.docName} />
                </div>
            </div>
        </Page>
    )
};

ViewDocxPage.propTypes = {
    title: PropTypes.string.isRequired,
    docName: PropTypes.string.isRequired,
};

export default ViewDocxPage;