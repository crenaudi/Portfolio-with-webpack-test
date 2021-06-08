import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "C", xp:1.8},
            {id: 2, value: "Javascript", xp:.95},
            {id: 3, value: "Phyton / C#", xp:.95},
            {id: 4, value: "HTML / CSS", xp:1.4}
        ],
        frameworks: [
            {id: 1, value: "React", xp:0.8},
            {id: 2, value: "Bootstrap", xp:1.1},
            {id: 3, value: "Sass", xp:0.8},
            {id: 4, value: "Suite Adobe", xp:1.5}
        ],
    }

    render() {
        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="framworksDisplay"
                    title="Frameworks & Libraries"
                />
            </div>
        );
    }
}

export default Languages;