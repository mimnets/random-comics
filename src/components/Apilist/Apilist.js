import React, { useEffect, useState } from 'react';
import Api from '../Api/Api';

const Apilist = () => {
    
    const [apis, setApis] = useState([]);
    console.log(apis.length)
    useEffect(()=>{
        fetch("https://api.publicapis.org/entries")
        .then(res => res.json())
        .then(data => setApis(data.entries));
    },[])

    return (
        <div>
            <h1>Free Random Comics</h1>
            {
                apis.map(api => <Api api={api}></Api>)
            }
        </div>
    );
};

export default Apilist;