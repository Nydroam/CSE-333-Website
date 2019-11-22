import React from 'react';
import './AboutPage.css';
import typography from "../../typography.png";
class AboutPage extends React.Component{
    render(){
        return(
            <div className="about-page">
                <img src={typography} alt=""></img>
                <div className="about-columns">
                    <div className="about-column">
                        <div className="about-header">
                        Who We Are
                        </div>
                        <div className="about-desc">
                        We are the SBU Tabletop Club, a club dedicated to playing tabletop games.
                        </div>
                        <br></br>
                        <div className="about-desc">
                        Calling all adventurers, wanderers, wizards, and vagabonds alike. Come embark on a journey to magic, treasure, and self-discovery.
                        </div>
                    </div>
                    <div className="about-column">
                        <div className="about-header">
                        What We Do
                        </div>
                        <div className="about-desc">
                            We have weekly meetings where members play various board and card games.
                        </div>
                        <br></br>
                        <div className="about-desc">
                        There will be many D&D campaigns as well as general events and competitions throughout the semester.
                        </div>
                        
                    </div>
                    <div className="about-column">
                        <div className="about-header">
                        Where We Are
                        </div>
                        <div className="about-desc">
                            We hold general body meetings every Friday at 4PM in the SBS Building Lounge.
                        </div>
                        <br></br>
                        <div className="about-desc">
                            The floor will be announced before the meeting each week on Discord and our Facebook Page.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;