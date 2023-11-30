import React, { useState } from 'react'
import axios from 'axios';

function Quote() {

    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    function getQuote() {
        axios.get("http://localhost:5000/" , {crossdomain:true})
        .then(respone =>{
            setText(respone.data.text);
            setAuthor(respone.data.author);
        })
    }

    return (
        <div>
            <button onClick={getQuote}>Generate Qutos</button>
            <h1>{text}</h1>
            <h3>{"-" + author}</h3>
        </div>
    )
}

export default Quote