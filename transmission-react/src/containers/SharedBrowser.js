import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { api } from '../services/api';
import { useParams } from 'react-router-dom';
import PageWebSocket from '../components/PageWebSocket';
import { useHistory } from "react-router-dom";
import InvalidPage from './InvalidPage'

const SharedBrowser = (props) => {

    const [text, setText] = useState('');
    const { cableApp, urlKeyList } = props;
    const [keyList, setKeyList] = useState(props.urlKeyList);
    const { url_key } = useParams();
    const history = useHistory();

    useEffect(() => {
        getUrls();
        api.getSharedPage(url_key).then( resp => 
            (resp) ? setText(resp.content) : history.push('/invalid')
        );
      }, []); 

      const getUrls = () => {
        api.getUrlKeyList().then( resp => setKeyList(resp))
      }

    const handleTextChange = e => {
        api.updatePage(url_key, e.target.value)
        .then( resp => setText(resp.content))
        .catch( err => console.log("catch err here", err));
        setText(e.target.value);
      };

    return (
        ((url_key === "invalid") ?
        <InvalidPage urlKeyList={keyList}/>
        :
        <Form className="shared-text">
            <Form.Label><h4>Key: {url_key}</h4></Form.Label>
            <Form.Control 
                as="textarea" 
                rows="25" 
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
    )
}

export default SharedBrowser