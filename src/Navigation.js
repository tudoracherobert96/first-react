import {render} from "@testing-library/react";
import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import NavigationMenu from "./NavigationMenu";


function Navigation(){
    const [showMenu, setShowMenu] = useState(false);

    let menu = null;
    let menuMask = null;

    if(showMenu){
        menu = <NavigationMenu
            closeMenu = {() => setShowMenu(!showMenu)}
        />

        menuMask = <div style={{width:"100%",height:"10000px",top:"0",left:"0",backgroundColor:"yellow"}} onClick={()=> setShowMenu(false)}>
        </div>
    }

    return(
        <nav style={{marginRight:"5px"}}>
            <span>
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {menu}

        </nav>
    )
}

export default Navigation;
