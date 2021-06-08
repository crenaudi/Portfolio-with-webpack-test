import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Hobbies</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-keyboard"></i>
                    <span>Guildwars2 : Lame brillante / Astralaria</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-cut"></i>
                    <span>Maitrise Tailleur 60%</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-drafting-compass"></i>
                    <span>Novice Sculpteur 30%</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-globe-asia"></i>
                    <span>Eploration du monde réel à 20%</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-dice"></i>
                    <span>Roliste à 100%</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;