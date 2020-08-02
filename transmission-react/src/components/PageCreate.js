import React from "react";
import { Link } from 'react-router-dom';

const PageCreate = (props) => {

    const { url_key } = props;

    return (
        <Link to={props.url_key} className="btn btn-dark"> Create a Page </Link>
    )
}

export default PageCreate