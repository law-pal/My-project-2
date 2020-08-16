import React, { Component } from 'react';
import './App.css';
import Countries from './Components/Countries';
import UnitedStates from './Components/unitedStates'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';






class App extends Component {
  render() {
    return(
     <Router>
       <Switch>
         <Route></Route>
         <Route></Route>
         <Route></Route>
         <Route></Route>
         <Route></Route>
         <Route></Route>
         <Route></Route>
       </Switch>
     </Router>
    );
  }
}
export default App;
