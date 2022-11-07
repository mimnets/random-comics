import React, { useEffect, useState } from 'react';

const Comics = () => {
    const comicsNumber = Math.floor(Math.random() * 2500) + 1;
    const [comics, setComis] = useState([]);

    useEffect(()=>{
        fetch(`https://xkcd.com/${comicsNumber}/info.0.json`)
        .then(res=> res.json())
    },[])

    return (
        <div>
            <h1>Free Random Comics</h1>
            <p>Comics URL: <a href="https://xkcd.com/2000/info.0.json" target="_blank" rel="noopener noreferrer">{comicsNumber}</a></p>
        </div>
    );
};

export default Comics;