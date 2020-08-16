import React, { Component } from 'react';
import './App.css';
import Countries from './Components/Countries';
import UnitedStates from './Components/unitedStates'

class App extends Component {
  render() {
    return(
      <div>
        <Countries/>
        <UnitedStates/>
      </div>
    );
  }
}
export default App;
