import React from 'react';
import './DicePage.css';
import D20 from '../D20/D20'

class DicePage extends React.Component{

    render(){
        return (
            <div className="dice-page">
                <div className="header">
                    Dice Roller
                </div>
                <div className="subheader">
                    Click on each dice to roll it!
                </div>
                <div className="dice-pos">
                <D20/>
                </div>
            </div>
        ) 
    }

}

export default DicePage;