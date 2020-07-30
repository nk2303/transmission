import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

const Home = () => {
    const [key, setKey] = useState('');

    useEffect(() => {
        generateKey();
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

        console.log(key)
        api.createPage(url_key, "").then( resp => setKey(resp.page.url_key))
        //TO DO: check if url is unique, if not generate new url_key
        return key
    }

    return (
        (key === "") ?
        null
        :
        <Link to={key} className="btn btn-dark"> Create a Page</Link>
    )
}

export default Home