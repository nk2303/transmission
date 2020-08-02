import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { api } from '../services/api';
import { useParams } from 'react-router-dom';
import PageWebSocket from '../components/PageWebSocket';
import { useHistory } from "react-router-dom";
import InvalidPage from './InvalidPage';
import DeletePage from '../components/DeletePage';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SharedBrowser = (props) => {

    const [text, setText] = useState('');
    const { cableApp, urlKeyList } = props;
    const [keyList, setKeyList] = useState(props.urlKeyList);
    const [pageId, setPageId] = useState(-1);
    const { url_key } = useParams();
    const history = useHistory();

    useEffect(() => {
        getUrls();
        api.getSharedPage(url_key).then( resp => 
            resp ? validResp(resp) : history.push('/invalid')
        );
      }, []); 

    const validResp = (resp) => { 
        setText(resp.content); 
        setPageId(resp.id);
    }

    const getUrls = () => {
        api.getUrlKeyList().then( resp => setKeyList(resp));
    }

    const handleTextChange = e => {
        api.updatePage(url_key, e.target.value)
        .then( resp => setText(resp.content))
        .catch( err => console.log("catch err here", err));
        setText(e.target.value);
      }

    return (
        ((url_key === "invalid") ?
        <InvalidPage urlKeyList={keyList}/>
        :
        <Form className="shared-text">
            <Row>
                <Col sm={8} md={8}><h4>Key: {url_key}</h4></Col>
                <Col sm={4} md={4} className="btn-right"><DeletePage url_key={url_key} page_id={pageId}/></Col>
            </Row>
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