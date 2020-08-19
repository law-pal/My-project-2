import React, {Component} from 'react';
import usaOne from '../project2-img/usa-1.jpg';
import usaTwo from '../project2-img/usa-2.jpg';
import usaThree from '../project2-img/usa-3.jpg';
import usaFour from '../project2-img/usa-4.jpg';
import usaFive from '../project2-img/usa-5.jpg';
import usaSix from '../project2-img/usa-6.jpg';
import usaSeven from '../project2-img/usa-7.jpg';
import usaEigth from '../project2-img/usa-8.jpg';
import {connect} from 'react-redux';
import {fetchCountries} from '../Actions/countriesActions';


class UnitedStates extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCountries())
    }

     render() {
        const usa = this.props.countries.length ? this.props.countries[239] : ''
        // let usa = []
        // if(this.props.countries.length > 0) {
        //     usa = this.props.countries[239]
        // }
        return(
          
            <div className='container-states'>
                <div>
                
                </div>
                <div className='blue-states-usa'>
                    <div className='about-country'>
                        <p><strong>The United States of America (USA)</strong>, commonly known as the United States (U.S. or US) or America, is a country mostly located in central North America, between Canada and Mexico. It consists of 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles (9.8 million km2), it is the world's third- or fourth-largest country by total area.[d] With a 2019 estimated population of over 328 million,the U.S. is the third most populous country in the world. Americans are a racially and ethnically diverse population that have been shaped through centuries of immigration. The capital is Washington, D.C., and the most populous city is New York City.</p>
                    </div>
                </div>
                <main className='red-states'>
                    <div>
                        <h1>{usa.name}</h1>
                        <img src={usa.flag} alt='#'/>
                        <p><strong>Capital:</strong>
                        {usa.capital}
                        </p>
                        <p><strong>Region:</strong>
                        {usa.region}
                        </p>
                        <p><strong>Subregion:</strong>
                        {usa.subregion}
                        </p>
                        <p><strong>Borders:</strong>
                        {usa.borders}
                        </p>
                        <p><strong>Population:</strong>
                        {usa.population}
                        </p>
                        <p><strong>Language:</strong>
                        English
                        </p>

                    </div>
                </main>
                <div className='green-states'>
                    <div className='green-child-states'>
                        <div className='one-states'><img src={usaOne} alt='#'/></div>
                        <div className='two-states'><img src={usaTwo} alt='#'/></div>
                        <div className='three-states'><img src={usaThree} alt='#'/></div>
                        <div className='four-states'><img src={usaFour} alt='#'/></div>
                        <div className='five-states'><img src={usaFive} alt='#'/></div>
                        <div className='six-states'><img src={usaSix} alt='#'/></div>
                        <div className='seven-states'><img src={usaSeven} alt='#'/></div>
                        <div className='eight-states'><img className='img-eight' src={usaEigth} alt='#'/></div>
                    </div>
                </div>
            </div>            
        );
    }
}

const mapStateToProps = state => ({
    countries: state.countries.countries,
})

export default connect(mapStateToProps)(UnitedStates);