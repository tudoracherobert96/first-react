import {Link, Route} from "react-router-dom";
import $ from "jquery"
import React, {useState,useEffect} from 'react';

function Home(props){
    var [shortList,setShortList] = useState(props.lst);
    function removeElem(list){
        setShortList(shortList.filter((elem) => elem != list));
    }
    return(
        <div>
            <h1>Home</h1>
            <p>Content from home page.</p>
            <ul>{
                shortList.map((list,index) => {
                    return <li>{list} <button onClick={() => removeElem(list)}>-</button></li>
                })
            }
            </ul>
            <button>
                <Link to="/list" onClick={props.closeMenu}>List</Link>
            </button>
        </div>
    )
}
export default Home;