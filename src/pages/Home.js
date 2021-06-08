import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
    console.log('hello')
    return (
        <div className="home">
            <NavBar />
            <div className="homeContent">
                <div className="content">
                    <h1>Camille Renaudin</h1>
                    <h2>Developper Front-end</h2>
                    <div className="cvPdf">
                        <a href="./media/cv.pdf" target="_blank">Download my CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;