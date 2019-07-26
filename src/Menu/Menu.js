import React from 'react';
import {Link} from 'react-router-dom';

// renders the menu
export default class Menu extends React.Component{

    render(){
        return(
            <React.Fragment>
                <div className="top">
                    <Link to="/" className="top-item">Cart(<span id="cart">0</span>)</Link>
                    <h1 className="name">SOLARIS</h1>
                    <Link to="/" className="top-item">Search</Link>
                </div>
                <div className="bottom">
                    <Link>Design goods</Link>
                    <ul className="main-nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/">Work</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                    <Link to="/">Shop</Link>
                </div>
            </React.Fragment>
        );
    }
}