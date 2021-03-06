import React, {Component} from 'react';
import portugalOne from '../project2-img/portugal-1.jpeg'
import portugalTwo from '../project2-img/portugal-2.jpg'
import portugalThree from '../project2-img/portugal-3.jpg'
import portugalFour from '../project2-img/portugal-4.jpg'
import portugalFive from '../project2-img/portugal-5.jpg'
import portugalSix from '../project2-img/portugal-6.jpg'
import portugalSeven from '../project2-img/portugal-7.jpg'
import portugalEigth from '../project2-img/portugal-8.jpg'
import {connect} from 'react-redux';
import {fetchCountries} from '../Actions/countriesActions';



class Portugal extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCountries())
    }

    render() {
        const portugal = this.props.countries.length ? this.props.countries[179] : ''
        // let portugal = []
        // if(this.props.countries.length > 0) {
        //     portugal = this.props.countries[212]
        // }
        return(
            <div className='container-states'>
                <div></div>
            <div className='blue-states-portugal'>
            <div className='about-country'>
                        <p><strong>Portugal</strong><br/>is a country located mostly on the Iberian Peninsula, in southwestern Europe. It is the westernmost sovereign state of mainland Europe, being bordered to the west and south by the Atlantic Ocean and to the north and east by Spain. Its territory also includes the Atlantic archipelagos of the Azores and Madeira, both autonomous regions with their own regional governments. The official and national language is Portuguese.</p>
                    </div>
            </div>
            <main className='red-states'>
                <div>
                <h1>{portugal.name}</h1>
                        <img src={portugal.flag} alt='#'/>
                        <p><strong>Capital:</strong>
                        {portugal.capital}
                        </p>
                        <p><strong>Region:</strong>
                        {portugal.region}
                        </p>
                        <p><strong>Subregion:</strong>
                        {portugal.subregion}
                        </p>
                        <p><strong>Borders:</strong>
                        {portugal.borders}
                        </p>
                        <p><strong>Population:</strong>
                        {portugal.population}
                        </p>
                        <p><strong>Language:</strong>
                        Portuguese
                        </p>
                </div>
            </main>
            <div className='green-states'>
                <div className='green-child-states'>
                    <div className='one-states'><img src={portugalOne} alt='#'/></div>
                    <div className='two-states'><img src={portugalTwo} alt='#'/></div>
                    <div className='three-states'><img src={portugalThree} alt='#'/></div>
                    <div className='four-states'><img src={portugalFour} alt='#'/></div>
                    <div className='five-states'><img src={portugalFive} alt='#'/></div>
                    <div className='six-states'><img src={portugalSix} alt='#'/></div>
                    <div className='seven-states'><img src={portugalSeven} alt='#'/></div>
                    <div className='eight-states'><img className='img-eight' src={portugalEigth} alt='#'/></div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    countries: state.countries.countries,
})

export default connect(mapStateToProps)(Portugal);