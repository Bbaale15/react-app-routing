import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
           <Link to='/'>
            <h3>Logo</h3>
           </Link>
            <ul>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/tac'>
                    <li>Tac</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
