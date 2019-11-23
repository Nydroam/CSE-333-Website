import React from 'react';
import './ListingPage.css';
import Card from '../Card/Card';

const games = [
    {img:require("../../phb.png"),
    name:"Dungeons & Dragons",
    subtitle:"Tabletop RPG",
    desc:"Dungeons & Dragons is a role-playing fantasy tabletop game where one person, the dungeon master, tells a story to the players, who in turn make decisions to progress the story.",
    link:"https://dnd.wizards.com/dungeons-and-dragons/what-is-dd"},
    {img:require("../../exploding.png"),
    name:"Exploding Kittens",
    subtitle:"Card Game",
    desc:"Exploding Kittens is a card game for 2-5 players where the goal of the game is to not draw one of the exploding kittens. Have fun manipulating others into drawing the exploding kittens while admiring the comic artwork of The Oatmeal.",
    link:"https://explodingkittens.com/"},
    {img:require("../../catan.jpeg"),
    name:"Catan",
    subtitle:"Strategy Board Game",
    desc:"Catan is a strategy board game where players play as settlers who attempt to build and develop holdings while managing resources via trade and other actions.",
    link:"https://www.catan.com/"},

]
const events=[
    {img:require("../../game_event.jpg"),
    name:"Game Night",
    subtitle:"General",
    desc:"We are holding a game night in the SAC this Tuesday! Everyone is welcome for a night of food and fun!",
    loc:"SAC Ballroom A | 2/12 at 6PM"},
    {img:require("../../original_logo.jpg"),
    name:"D&D Campaign Setup",
    subtitle:"D&D",
    desc:"We will be introducing the Dungeon Masters who are running campaigns this semester. Join this event to be matched with a group for D&D. No experience necessary to join!",
    loc:"SBS Building (Floor TBD) | 2/15 at 4PM"}
]
class ListingPage extends React.Component{
    

    render() {
        let list = games;
        if (this.props.page==="Events")
            list = events;
        return(
            <div className="listing-page">
                <div className="listing-header">{this.props.page} Listing</div>
                {list.map(element=><React.Fragment><Card info={element}/><div className="card-div"></div></React.Fragment>)}
            </div>
        )
    }
}

export default ListingPage;