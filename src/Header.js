import {render} from "@testing-library/react";
import React, {Component} from 'react';
import Navigation from './Navigation'
import Cart from './Views/Cart'

function Header(){
    return(
        <header>
            <span>AppName:Robi</span>
            <span style={{float:"right"}}>
                <Cart />
                <Navigation />
            </span>

        </header>
    )
}

export default Header;
