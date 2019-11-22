import React from 'react';
import "./NavButton.css";

class NavButton extends React.Component{
    render(){
        let modStyle={}
        let imgStyle={}

        return(
            <div className="nav-button" onClick={e=>this.props.changePage(this.props.name)} style={modStyle}>
                <img src={require("../../" + this.props.name + ".png")} style={imgStyle} alt={""}></img>
                {this.props.name}
            </div>
        )
    }
}
export default NavButton;