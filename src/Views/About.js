import {Route} from "react-router-dom";
import React, {useState} from 'react';

function About(){
    var [pumpkins,setPumpkins] = useState(0);
    async function add(){
        await setPumpkins(pumpkins+1)
    }
    async function sub(){
        await setPumpkins(pumpkins-1)
    }
    return(
        <div>
            <h1>About</h1>
            <p>Content from about page.</p>
            <p>You currently have {pumpkins} pumpkins.</p>
            <div>
                <button onClick={sub}>-</button>
                <button onClick={add}>+</button>
            </div>
        </div>
    )

}

export default About;
