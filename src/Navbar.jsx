import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1 style={{paddingLeft:'25px'}}>Web Services</h1>
                <ul >
                <li><NavLink className="navlink" exact activeClassName="active-link" to="/"> Home </NavLink></li>
                <li> <NavLink className="navlink" exact activeClassName="active-link" to="/about"> About </NavLink></li>
                <li><NavLink className="navlink" exact activeClassName="active-link" to="/service"> Service </NavLink></li>
                <li><NavLink className="navlink" exact activeClassName="active-link" to="/contact"> Contact </NavLink></li>   
                </ul>
            </div>

        </>
    );
}

export default Navbar;
