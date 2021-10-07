// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DisplayNames from './components/DisplayNames/DisplayNames'
import NamesList from './components/NamesList/NamesList';
import AlertUser from './components/AlertUser/AlertUser'

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      firstName: 'Reggie', 
      lastName: 'White',

      newNames: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],  
    }
  }
  
  alertMessage=() => {
      alert('DevCodeCamp')
  }
  
  
  

  render() { 
    return ( 
      <div>
        <h1>Hello World</h1>
        <h1><DisplayNames names={this.state}/></h1>
        <h2><NamesList namesList={this.state.newNames}/></h2>
        <h2><AlertUser alertMessage={this.alertMessage}/></h2>


        {/* <button onClick={click}>Click Me</button>  */}
        {/* <button class= "btn clickme">Click Me</button> */}

        

      </div>
     );
  }
}

export default App;