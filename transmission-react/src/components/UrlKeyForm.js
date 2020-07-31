import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const UrlKeyForm = () => {

    const [key, setKey] = useState('');

    const handleKeyChange = e => {
        
    }

    return (
        <Form className="url-form">
            <Form.Control 
                type="text" 
                placeholder="Type your 4-character key..." 
                onChange={handleKeyChange}
                value={key}
                />
            <Link to={''} className="btn btn-dark go-url"> Go </Link>
        </Form>
    )
}

export default UrlKeyForm