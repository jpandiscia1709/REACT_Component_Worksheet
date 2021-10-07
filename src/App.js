// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DisplayNames from './components/DisplayNames/DisplayNames'
import NamesList from './components/NamesList/NamesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      firstName: 'Reggie', 
      lastName: 'White',

      newNames: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
    }
  } 

  

    
  render() { 
    return ( 
      <div>
        <h1>Hello World</h1>
        <h1><DisplayNames names={this.state}/></h1>
        <h2><NamesList namesList={this.state.newNames}/></h2>

      </div>
     );
  }
}
export default App;