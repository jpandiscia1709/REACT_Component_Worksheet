// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import DisplayNames from './components/DisplayNames/DisplayNames'


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      firstName: 'Reggie', 
      lastName: 'White'

      


    }
  } 

  





    render() { 
      return (  );
    }
  }
   
  export default ;
  

    
  render() { 
    return ( 
      <div>
        <h1>Hello World</h1>
        <h1><DisplayNames names={this.state}/></h1>
        {/* <h2>{this.names[this.state.nameNumber].firstName</h2>/> */}
      </div>
     );
  }
}
export default App;