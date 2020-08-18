import React, {Component} from 'react';
import Country from './Country';
import {fetchCountries} from '../Actions/countriesActions';
import {connect} from 'react-redux';


class Countries extends Component {

    componentDidMount() {
        
        this.props.dispatch(fetchCountries())
    }

    renderCountry = () => {
        if(this.props.loading) {
            return ''
        }else if(this.props.hasErrors) {
            return <p>error can't display countries...</p>
        }else {
        return this.props.countries.map(country => <Country key={country.name} nation={country}/>
           );
        }
    }

    render() {
        return(
            
            <div>
                {this.renderCountry()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    countries: state.countries.countries,
    loading: state.countries.loading,
    hasErrors: state.countries.hasErrors
})
export default connect(mapStateToProps)(Countries);