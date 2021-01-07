import {Link} from "react-router-dom";
import React from "react";


function NavigationMenu(props){

    return (
        <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
            <span>
                The menu
            </span>
            <ul>
                <li>
                    <Link to="/" onClick={props.closeMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={props.closeMenu}>About</Link>
                </li>
                <li>
                    <Link to="/list" onClick={props.closeMenu}>List</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu