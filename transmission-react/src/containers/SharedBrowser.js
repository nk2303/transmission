import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import { api } from '../services/api';
import { useParams } from 'react-router-dom';

const SharedBrowser = () => {

    const [text, setText] = useState('');
    const { urlKey } = useParams();

    const handleTextChange = e => {
        api.updatePage(urlKey, e.target.value);
        setText(e.target.value);
      };

    return (
        <Form.Group controlId="formControlTextArea">
            <Form.Label>Shared text</Form.Label>
            <Form.Control 
                as="textarea" 
                rows="30" 
                placeholder="Write or paste text here. Anyone you share with will see your text as it is typed..."
                onChange={handleTextChange}
                value={text}
            />
        </Form.Group>
    )
}

export default SharedBrowser