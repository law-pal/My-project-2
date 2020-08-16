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
            return <p>loading...</p>
        }else if(this.props.hasErrors) {
            return <p>error can't display countries...</p>
        }else {
            console.log(this.props.countries)
        return this.props.countries.map(country => <Country key={country.id} nation={country}/>)
        }
    }

    render() {
        return(
            <div>
                 <h1>Hello</h1>
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