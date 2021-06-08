import React from 'react';
import NavBar from '../components/NavBar';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <NavBar />
            <ProjectList />
        </div>
    );
};

export default Portfolio;