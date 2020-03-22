//import React from 'react';
import './App.css';
import Contacts from "./Contacts";
import Clock from "./Clock";
import React, { Component } from 'react';

let time = new Date().toLocaleString();

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        contacts: [],
    };
  }
  render(){
    return(    
      <div>
          <Clock></Clock>
          <Contacts contacts={this.state.contacts} />
      </div>
        
    )
  }
    
    

componentDidMount() {

  fetch('https://api.thecatapi.com/v1/images/search')
  .then(results => {return results.json(); })
  .then((data) => { this.setState({ contacts: data })
  })
  .catch(console.log)
}
  
}

export default App;
