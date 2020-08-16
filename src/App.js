import React, { Component } from 'react';
import './App.css';
// import Countries from './Components/Countries';
// import UnitedStates from './Components/unitedStates';
// import Colombia from './Components/Colombia';
// import Mexico from './Components/Mexico';
// import Spain from './Components/Spain';
// import Portugal from './Components/Portugal';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';






class App extends Component {
  render() {
    return(
      <Navbar/>
    //  <Router>
    //    <ul>
    //      <li>
    //        <Link className='navbar-link' to='/'>Countries</Link>
    //      </li>
    //      <li>
    //        <Link className='navbar-link' to='/United-States'>United States</Link>
    //      </li>
    //      <li>
    //        <Link className='navbar-link' to='/Colombia'>Colombia</Link>
    //      </li>
    //      <li>
    //        <Link className='navbar-link' to='/Mexico'>Mexico</Link>
    //      </li>
    //      <li>
    //        <Link className='navbar-link' to='/Spain'>Spain</Link>
    //      </li>
    //      <li>
    //        <Link className='navbar-link' to='/Portugal'>Portugal</Link>
    //      </li>
    //    </ul>
    //     <Switch>
    //      <Route exact path='/' component={Countries}/>
    //      <Route path='/United-States' component={UnitedStates}/>
    //      <Route path='/Colombia' component={Colombia}/>
    //      <Route path='/Mexico' component={Mexico}/>
    //      <Route  path='/Spain' component={Spain}/>
    //      <Route  path='/Portugal' component={Portugal}/>
    //    </Switch>
    //  </Router>
    );
  }
}
export default App;
