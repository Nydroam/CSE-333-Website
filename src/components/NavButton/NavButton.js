import React from 'react';
import "./NavButton.css";

class NavButton extends React.Component{
    render(){
        let modStyle={}
        let imgStyle={}
        // if (this.props.name === "Games"){
        //     modStyle={position:"relative",right:"10px"}
        //     imgStyle={position:"relative",left:"7px"}
        // }
        // if (this.props.name === "Events"){
        //     modStyle={position:"relative",right:"5px"}

        // }

        

        return(
            <div className="nav-button" style={modStyle}>
                <img src={require("../../" + this.props.name + ".png")} style={imgStyle} alt={""}></img>
                {this.props.name}
            </div>
        )
    }
}
export default NavButton;