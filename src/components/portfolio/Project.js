import React, { Component } from 'react';

class Project extends Component {
    state = {
        showInfo : false
    }
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        let {name, myIcons, link, data, picture}=this.props.item;

        return (
            <div className="project">
                <div className="icons">
                   {myIcons.map(icon =>
                       <i className={icon} key={icon}></i>
                   )}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt=""/>
                <span className="infos" onClick={this.handleInfo}>
                    <i class="fas fa-search"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={link} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                    </div>
                                </div>
                                <p className="text">{data}</p>
                                <div className="button return" onClick={this.handleInfo}>
                                    <span>EXIT</span>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        );
    }
}

export default Project;