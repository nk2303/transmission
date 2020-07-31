import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import PageCreate from '../components/PageCreate';
import UrlKeyForm from '../components/UrlKeyForm'

const Home = () => {
    const [key, setKey] = useState('');
    const [keyList, setKeyList] = useState([]);

    useEffect(() => {
        generateKey();
        getUrls();
    }, []);

    const generateKey = () => {
        const characters = [ 
            "A",  "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
            "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ]
        let url_key = '';
        for (let i = 0; i <= 3; i++) {
            let k = characters[Math.floor(Math.random()*characters.length)]
            url_key += k;
        }
        api.createPage(url_key, "").then( resp => setKey(resp.page.url_key))
        //TO DO: check if url is unique, if not generate new url_key
        //OR: comes up with new way of generating unrepeat url_key
        return key
    }

    const getUrls = () => {
        api.getUrlKeyList().then( resp => setKeyList(resp))
    }

    return (
        
        <div className="homepage">
            <h1>Share text in real-time</h1>
            <br/><br/>
            <p>An online tool for people to quickly share texts between browsers with the same URL</p>
            <p>Click below button to start</p>
            {(key === "") ? null : <PageCreate url_key={key}/>}
            <br/><br/>
            <hr/>
            <br/><br/>
            Or enter your URL key to go to an existing page
            <br/><br/>
            <UrlKeyForm urlKeyList={keyList}/>
        </div>
    )
}

export default Home