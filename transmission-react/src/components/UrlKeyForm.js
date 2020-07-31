import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const UrlKeyForm = (props) => {

    const [key, setKey] = useState('');
    const [validKey, setValidKey] = useState(false);

    const handleKeyChange = e => {
        setKey(e.target.value);
        (props.urlKeyList.indexOf(e.target.value) !== -1) ? setValidKey(true) : validKey(false)
    }

    return (
        <Form className="url-form">
            <Form.Control 
                type="text" 
                placeholder="Type your 4-character key..." 
                onChange={handleKeyChange}
                value={key}
                />
            {validKey ?
            <Link to={''} className="btn btn-dark go-url"> Go </Link>
            :
            null
            }
        </Form>
    )
}

export default UrlKeyForm