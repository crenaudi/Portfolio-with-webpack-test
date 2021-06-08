import React from 'react';
import NavBar from '../components/NavBar';

const Contact = () => {
    return (
        <div className="contact">
            <NavBar />
            <div className="contactContent">
            <div class='music-card playing'>
                <div class='image'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div class='wave'></div>
                <div className="contactBox">
                    <h1>Contact</h1>
                    <ul>
                        <li>
                            <i className="fa fa-map-marker-alt"></i>
                            <span>Fontainebleau</span>
                        </li>
                        <li>
                            <i className="fa fa-mobile-alt"></i>
                            <span>06 88 67 43 12</span>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <span>camillerenaudin91@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;