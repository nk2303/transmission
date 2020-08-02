import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { api } from '../services/api';
import { useHistory } from "react-router-dom";


const DeletePage = (props) => {

    const [show, setShow] = useState(false);
    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { url_key , page_id} = props;

    const handleDelete = () => {
        api.deletePage(props.page_id);
        handleClose();
        history.push('/')
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete Page
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Permanently delete page</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deleting means that no one will be able to access this page anymore, and all information will be destroyed.</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeletePage