import React from 'react';
import './D20.css';
class D20 extends React.Component{
    constructor(props){
        super(props);
        this.diceRef = React.createRef();
        this.textRef = React.createRef();
        this.slideRef = React.createRef();
        this.state={
            clickable:true
        }
    }
    roll = () => {
        let dice = this.diceRef.current;
        let text = this.textRef.current;
        let slide = this.slideRef.current;
        if(dice && text && slide){
        let randY = Math.floor(Math.random()*2)+1;
        let randZ = Math.floor(Math.random()*2)+1;
        let randNum = Math.floor(Math.random()*20)+1;
        this.setState({clickable:false})
        dice.style.transform = "translateX(800px) rotateY(" +randY*360+"deg) rotateZ(" + (randZ*360) + "deg)";
        text.style.transform = "opacity 0.5s linear 2s"
        text.style.opacity = "100%";
        text.innerHTML = randNum;
        slide.style.maxWidth="800px";
        setTimeout(this.unroll,5000)
        }
    }
        
    unroll = () =>{
        let dice = this.diceRef.current;
        let text = this.textRef.current;
        let slide = this.slideRef.current;
        if(dice && text && slide){
        dice.style.transform = "none"
        text.innerHTML = "";
        text.style.opacity = "0";
        slide.style.maxWidth="0px";
        }
        this.setState({clickable:true})
    }
    componentDidMount(){
        console.log(this.diceRef);
        let dice = this.diceRef.current;
        
        let width = 50;
        let height = width * 1.732;
        let radius = width*2*0.756-5;
        for (let side of dice.children){
            if(side.className=="side"){ 
            side.style.width = width*2 + "px";
             side.style.height = height + "px";
            }
        }

         dice.style.width = width*3 + "px";
         dice.style.height = width*3 + "px";
         dice.style.paddingBottom = width/2 + "px";

        let text = this.textRef.current;
        text.style.marginTop = width*1.2 + "px";
        text.style.fontSize = height/3 + "px";
        text.style.width = width/3*2 + "px";
        text.style.height = height + "px";
        text.style.transform = "translateZ(" + (radius +6) + "px)"


        let transformList = [
            "rotateY(  36deg ) rotateX( 53deg ) rotateZ(   0deg ) translateZ(  " + radius + "px )",
            "  rotateY( 108deg ) rotateX( 53deg ) rotateZ( 240deg ) translateZ(  " + radius + "px )",
            "   rotateY( 180deg ) rotateX( 53deg ) rotateZ( 240deg ) translateZ(  " + radius + "px )",
            "  rotateY( 253deg ) rotateX( 53deg ) rotateZ( 120deg ) translateZ(  " + radius + "px )",
            "  rotateY( 324deg ) rotateX( 53deg ) rotateZ(   0deg ) translateZ(  " + radius + "px )",
            
            "  rotateY(   0deg ) rotateX( -53deg ) rotateZ(  60deg ) translateZ(  " + radius + "px )",
            "  rotateY(  72deg ) rotateX( -53deg ) rotateZ(  60deg ) translateZ(  " + radius + "px )",
            "  rotateY( 144deg ) rotateX( -53deg ) rotateZ( 180deg ) translateZ(  " + radius + "px )",
            "  rotateY( 216deg ) rotateX( -53deg ) rotateZ( 180deg ) translateZ(  " + radius + "px )",
            "  rotateY( 288deg ) rotateX( -53deg ) rotateZ(  60deg ) translateZ(  " + radius + "px )",
            
            "  rotateY(  36deg ) rotateX( 11deg ) rotateZ( 180deg ) translateZ(  " + radius + "px )",
            "  rotateY( 108deg ) rotateX( 11deg ) rotateZ( 180deg ) translateZ(  " + radius + "px )",
            "  rotateY( 180deg ) rotateX( 11deg ) rotateZ( 300deg ) translateZ(  " + radius + "px )",
            "  rotateY( 253deg ) rotateX( 11deg ) rotateZ( 300deg ) translateZ(  " + radius + "px )",
            "  rotateY( 324deg ) rotateX( 11deg ) rotateZ( 180deg ) translateZ(  " + radius + "px )",
            
            "rotateY(   0deg ) rotateX( -11deg ) rotateZ( 120deg ) translateZ(  " + radius + "px )",
            "rotateY(  72deg ) rotateX( -11deg ) rotateZ(   0deg ) translateZ(  " + radius + "px )",
            "rotateY( 144deg ) rotateX( -11deg ) rotateZ(   0deg ) translateZ(  " + radius + "px )",
            "rotateY( 216deg ) rotateX( -11deg ) rotateZ(   0deg ) translateZ(  " + radius + "px )",
            "rotateY( 288deg ) rotateX( -11deg ) rotateZ( 120deg ) translateZ(  " + radius + "px )",
            
        ]
        let i = 0
        for(i= 0; i < transformList.length; i++){
            dice.children[i].style.transform = transformList[i]
        }
        
    }
    render(){
        return(<div id="anim-container">
        <div id="slide" ref={this.slideRef}><img id="tabletop" src={require("../../typography_tabletop.png")}/></div>
        <div id="dice" ref={this.diceRef} onClick={this.state.clickable?this.roll:null}>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div id="text" ref={this.textRef}></div>
        </div>
        </div>);
    }
}
export default D20;