import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

const PageWebSocket = (props) => {
    const { cableApp, getPageData, updateApp} = props;
    const { url_key } = useParams();

    useEffect(() => {
        props.cableApp.page = 
        props.cableApp.cable.subscriptions.create({
            channel: 'PagesChannel',
            page: url_key
        },
        {
            received: updatePage => {
                props.updateApp(updatePage)
            }
        }
        );
      }, []);

    return (
        <div></div>
    )
}

export default PageWebSocket