import React from "react";
import UrlKeyForm from '../components/UrlKeyForm';
import { Link } from 'react-router-dom';


const InvalidPage = (props) => {

    return (
        <div className="invalid-page">
            <h6 className="text-danger">
                Wrong url address. Please re-enter your key:
            </h6>
            <br/>
            <UrlKeyForm urlKeyList={props.urlKeyList}/>
            <br/><hr/><br/>
            <h6> Or go back to homepage: </h6>
            <br/>
            <Link to='/' className="btn btn-dark"> Create a Page </Link>
        </div>
    )
}

export default InvalidPage