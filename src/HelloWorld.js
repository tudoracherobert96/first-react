import logo from './logo.svg';
import './App.css';
import {render} from "@testing-library/react";
import React, {Component,useState} from 'react';
import $ from "jquery"

function HelloWorld(props){
        const [changeName,setChangeName] = useState(0);
        function change(){
            setChangeName($(".tester").val());
        }
        console.log(changeName);
        if(changeName == 0){
            return(
                <div>
                    <h1>Hello {props.name}</h1>
                    <input type="text" placeholder="Update name" className="tester"/>
                    <button onClick={change}>Change name</button>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>Hello {changeName}</h1>
                    <input type="text" placeholder="Update name" className="tester"/>
                    <button onClick={change}>Change name</button>
                </div>
            )
        }
}

export default HelloWorld;
