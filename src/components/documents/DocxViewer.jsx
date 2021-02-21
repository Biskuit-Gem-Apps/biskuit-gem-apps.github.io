import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Loading from "../Loading";
import mammoth from "mammoth";

const DocxViewer = props => {
    const [docContent, setDocContent] = useState(null);

    useEffect(() => {
        fetch(props.src)
            .then(res => res.arrayBuffer())
            .then(data => {
                mammoth.convertToHtml({ arrayBuffer: data })
                    .then(function(result){
                        const html = result.value; // The generated HTML
                        const messages = result.messages; // Any messages, such as warnings during conversion
                        setDocContent(html);
                    })
                    .done();
            });
    }, []);

    if (docContent !== null) {
        return <div className="my-docx" dangerouslySetInnerHTML={{ __html: docContent }}/>;
    }
    return <Loading />
};

DocxViewer.propTypes = {
    src: PropTypes.string.isRequired,
};

export default DocxViewer;