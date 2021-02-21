import React from "react";
import Page from "../../components/Page";
import DocxViewer from "../../components/DocxViewer";

const PrivacyPage = () => {
    return (
        <Page title="Privacy Policy">
            <div className="panel panel-default">
                <div className="panel-body">
                    <DocxViewer src={process.env.PUBLIC_URL + '/doc/Privacy.docx'} />
                </div>
            </div>
        </Page>
    )
};

export default PrivacyPage;