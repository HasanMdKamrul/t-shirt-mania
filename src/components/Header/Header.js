import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/grandpa'>Grandpa</NavLink>
        </nav>
    );
};

export default Header;