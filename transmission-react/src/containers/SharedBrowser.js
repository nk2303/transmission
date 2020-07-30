import React from 'react';
import Form from 'react-bootstrap/Form'
import { api } from '../services/api';

const SharedBrowser = () => {

    return (
        <Form.Group controlId="formControlTextArea">
            <Form.Label>Shared text</Form.Label>
            <Form.Control 
                as="textarea" 
                rows="30" 
                placeholder="Write or paste text here. Anyone you share with will see your text as it is typed..."
            />
        </Form.Group>
    )
}

export default SharedBrowser