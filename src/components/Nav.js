import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to='/arkansas'>Arkansas</Link></li>
                <li><Link to='/colorado'>Colorado</Link></li>
                <li><Link to='/newyork'>New York</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;