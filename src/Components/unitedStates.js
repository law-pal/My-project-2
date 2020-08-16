import React, {Component} from 'react';
import {fetchCountries} from '../Actions/countriesActions';
import {connect} from 'react-redux';



class UnitedStates extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchCountries())
    }

    renderUnitedStates = () => {
        
    }

    render() {
        return(
            <div>
                Hello
            </div>
        );
    }
}


export default UnitedStates;