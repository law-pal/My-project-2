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
                <div className='yellow-states'>
                    <div className='about-country'>
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