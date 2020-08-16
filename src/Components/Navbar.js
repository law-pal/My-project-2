import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Countries from './Countries';
import UnitedStates from './unitedStates';
import Colombia from './Colombia';
import Mexico from './Mexico';
import Spain from './Spain';
import Portugal from './Portugal';

class Navbar extends Component {
    render() {
      return(
       <Router>
         <ul>
           <li>
             <Link className='navbar-link' to='/'>Countries</Link>
           </li>
           <li>
             <Link className='navbar-link' to='/United-States'>United States</Link>
           </li>
           <li>
             <Link className='navbar-link' to='/Colombia'>Colombia</Link>
           </li>
           <li>
             <Link className='navbar-link' to='/Mexico'>Mexico</Link>
           </li>
           <li>
             <Link className='navbar-link' to='/Spain'>Spain</Link>
           </li>
           <li>
             <Link className='navbar-link' to='/Portugal'>Portugal</Link>
           </li>
         </ul>
          <Switch>
           <Route exact path='/' component={Countries}/>
           <Route path='/United-States' component={UnitedStates}/>
           <Route path='/Colombia' component={Colombia}/>
           <Route path='/Mexico' component={Mexico}/>
           <Route  path='/Spain' component={Spain}/>
           <Route  path='/Portugal' component={Portugal}/>
         </Switch>
       </Router>
      );
    }
  }
  export default Navbar;
  