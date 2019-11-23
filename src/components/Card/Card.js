import React from 'react';
import './Card.css';

class Card extends React.Component{
    render() {
        let {img,name,subtitle,desc,link,loc} = this.props.info;
        return(
        <div className="card">
            <div className="card-img"><img src={img} alt=""></img></div>
            <div className="card-body">
                <div className="card-name">{name}</div>
                <div className="card-sub">{subtitle}</div>
                <div className="card-desc">{desc}</div>
                {link?<div className="card-link"><a href={link}>Learn More</a></div>:null}
                {loc?<div className="card-link">{loc}</div>:null}
            </div>
        </div>)
    }
}

export default Card;