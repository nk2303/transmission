import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const UrlKeyForm = (props) => {

    const [key, setKey] = useState('');
    const [validKey, setValidKey] = useState(false);

    const handleKeyChange = e => {
        setKey(e.target.value);
        (props.urlKeyList.indexOf(e.target.value) !== -1) ? setValidKey(true) : setValidKey(false)
    }

    const handleSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        // (props.urlKeyList.indexOf(e.target.value) !== -1) ? setValidKey(true) : setValidKey(false)
    }

    const validateKey = () => {
        if (key === '') {
            return ''
        } else if (validKey) {
            return 'is-valid'
        } else if (!validKey) {
            return 'is-invalid'
        }
    }

    return (
        <Row>
            <Col></Col>
            <Col></Col>
            <Col className="input-key-css" style={{'width': '300px'}}>
                <Form className="url-form" onSubmit={handleSubmit}>
                    <Form.Control 
                        block
                        type="text" 
                        placeholder="Type your 4-character key..." 
                        className={validateKey()}
                        onChange={handleKeyChange}
                        value={key}
                        />
                    {validKey ?
                    null
                    :
                    <Form.Control.Feedback type="invalid">
                        Please enter correct Url Key
                    </Form.Control.Feedback>
                    }
                    {validKey ?
                    <Link to={key} className="btn btn-success go-url"> Go </Link>
                    :
                    null
                    }
                </Form>
            </Col>
            <Col></Col>
            <Col></Col>
        </Row>
    )
}

export default UrlKeyForm