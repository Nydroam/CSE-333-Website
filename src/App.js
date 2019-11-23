import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import AboutPage from "./components/AboutPage/AboutPage"
import ListingPage from "./components/ListingPage/ListingPage"
import DicePage from "./components/DicePage/DicePage";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      page:"About"
    }
  }
  changePage = (name) =>{
    console.log(name)
    this.setState({page:name})
  }

  render(){
    let {page} = this.state;
    let body = <AboutPage />;
    let modStyle={}
    if (page === "Games" || page === "Events"){
      modStyle={overflowY:"scroll"};
      body = <ListingPage page={page}/>;
    }
    if (page === "Dice"){
      body = <DicePage/>
    }
    
    
    return (
    <div className="App">
      <NavBar changePage={this.changePage}/>
      <div className="body" style={modStyle}>{body}</div>
    </div>
    );
  }
}

export default App;
