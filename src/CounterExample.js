import logo from './logo.svg';
import './App.css';
import {render} from "@testing-library/react";
import React, {useState} from 'react';

function CounterExample(){
    const [count, setCount] = useState(0)

    console.log(useState(0))

    return(
        <div>
            <h1>
                {count}
            </h1>
            <h1>
                <button onClick = {() => setCount(count + 1)}>Plus</button>
            </h1><h1>
                <button onClick = {() => setCount(count - 1)}>Minus</button>
            </h1>
        </div>
    )
}

export default CounterExample;
