import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3>Sorry but that page doesn't exist !</h3>
                <NavLink exact to="/">
                    <span href="">ACCUEIL</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;