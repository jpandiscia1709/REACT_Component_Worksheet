// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DisplayNames from './components/DisplayNames/DisplayNames'


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      firstName: ['Reggie'], 
      lastName: ['White']

    }
  } 

  
  

    
  render() { 
    return ( 
      <div>
        <h1>Hello World</h1>
        <DisplayNames />
        {/* <h2>{this.names[this.state.nameNumber].firstName</h2>/> */}
      </div>
     );
  }
}
export default App;