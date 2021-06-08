import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../../public/media/profile.jpg'
import logo from '../../public/media/logo.png'

const NavBar = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img className="icon" src={icon} alt="profil-pic" />
                    <img className="logo" src={logo} alt="profil-pic" />
                </div>
            </div>
            <div className="navBar">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive" >
                            <i className="fas fa-angle-double-right"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive" >
                            <i className="fas fa-angle-double-right"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName="navActive" >
                            <i className="fas fa-angle-double-right"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive" >
                            <i className="fas fa-angle-double-right"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/camille-renaudin-2b1b628a/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/crenaudi" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/crenaudi" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>@ Cv Camille Renaudin 2021</p>
                </div>
            </div>
        </div>
    );
};

export default NavBar;