import React, {Component} from 'react';
import colombiaOne from '../project2-img/colombia-1.jpg'
import colombiaTwo from '../project2-img/colombia-2.jpg'
import colombiaThree from '../project2-img/colombia-3.jpg'
import colombiaFour from '../project2-img/colombia-4.jpg'
import colombiaFive from '../project2-img/colombia-5.jpg'
import colombiaSix from '../project2-img/colombia-6.jpg'
import colombiaSeven from '../project2-img/colombia-7.jpg'
import colombiaEight from '../project2-img/colombia-8.jpg'
import {connect} from 'react-redux';
import {fetchCountries} from '../Actions/countriesActions';

class Colombia extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCountries())
    }

    render() {
        const colombia = this.props.countries.length ? this.props.countries[51] : ''
        // let colombia = []
        // if(this.props.countries.length > 0) {
        //     colombia = this.props.countries[212]
        // }
        return(
            <div className='container-states'>
                <div></div>
                <div className='blue-states-colombia'>
                <div className='about-country'>
                        <p><strong>Colombia</strong><br/> officially the Republic of Colombia is a transcontinental country largely in the north of South America, with territories in North America. Colombia is bounded on the north by the Caribbean Sea, the northwest by Panama, the south by Ecuador and Peru, the east by Venezuela, the southeast by Brazil, and the west by the Pacific Ocean. It comprises 32 departments and the Capital District of Bogotá, the country's largest city. With an area of 1,141,748 square kilometers (440,831 square miles), Colombia is the fourth-largest country in South America, after Brazil, Argentina and Peru. It is also the 25th-largest country in the world, the fifth-largest country in Latin America, and the second most populous Spanish-speaking country.</p>
                    </div>
                </div>
                <main className='red-states'>
                    <div>
                    <h1>{colombia.name}</h1>
                        <img src={colombia.flag} alt='#'/>
                        <p><strong>Capital:</strong>
                        {colombia.capital}
                        </p>
                        <p><strong>Region:</strong>
                        {colombia.region}
                        </p>
                        <p><strong>Subregion:</strong>
                        {colombia.subregion}
                        </p>
                        <p><strong>Borders:</strong>
                        {colombia.borders}
                        </p>
                        <p><strong>Population:</strong>
                        {colombia.population}
                        </p>
                        <p><strong>Language:</strong>
                        Spanish
                        </p>
                    </div>
                </main>
                <div className='green-states'>
                    <div className='green-child-states'>
                        <div className='one-states'><img src={colombiaOne} alt='#'/></div>
                        <div className='two-states'><img src={colombiaTwo} alt='#'/></div>
                        <div className='three-states'><img src={colombiaThree} alt='#'/></div>
                        <div className='four-states'><img src={colombiaFour} alt='#'/></div>
                        <div className='five-states'><img src={colombiaFive} alt='#'/></div>
                        <div className='six-states'><img src={colombiaSix} alt='#'/></div>
                        <div className='seven-states'><img src={colombiaSeven} alt='#'/></div>
                        <div className='eight-states'><img className='img-eight' src={colombiaEight} alt='#'/></div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    countries: state.countries.countries,
})

export default connect(mapStateToProps)(Colombia);