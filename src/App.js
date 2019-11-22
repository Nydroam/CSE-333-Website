import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar"
import AboutPage from "./components/AboutPage/AboutPage"

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
    if (page === "Games"){

    }
    return (
    <div className="App">
      <NavBar changePage={this.changePage}/>
      {body}
    </div>
    );
  }
}

export default App;
