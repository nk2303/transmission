import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { api } from '../services/api';
import { useParams } from 'react-router-dom';
import PageWebSocket from '../components/PageWebSocket';

const SharedBrowser = (props) => {

    const [text, setText] = useState('');
    const { url_key } = useParams();
    const { cableApp } = props;

    useEffect(() => {
        api.getSharedPage(url_key).then( resp => setText(resp.content));
      }, []); 

    const handleTextChange = e => {
        api.updatePage(url_key, e.target.value)
        .then( resp => setText(resp.content))
        .catch( err => console.log("catch err here", err));
        setText(e.target.value);
      };

    return (
        <Form className="shared-text">
            <Form.Label><h4>Key: {url_key}</h4></Form.Label>
            <Form.Control 
                as="textarea" 
                rows="30" 
                placeholder="Write or paste text here. Anyone you share with will see your text as it is typed..."
                onChange={handleTextChange}
                value={text}
            />
            {/* <PageWebSocket
                cableApp={props.cableApp}
                getPageData={api.getSharedPage}
                updatePage={api.updatePage}
            /> */}
        </Form>
    )
}

export default SharedBrowser