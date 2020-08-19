import React, {Component} from 'react';
import spainOne from '../project2-img/spain-1.jpg'
import spainTwo from '../project2-img/spain-2.jpg'
import spainThree from '../project2-img/spain-3.jpg'
import spainFour from '../project2-img/spain-4.jpg'
import spainFive from '../project2-img/spain-5.jpg'
import spainSix from '../project2-img/spain-6.jpg'
import spainSeven from '../project2-img/spain-7.jpg'
import spainEigth from '../project2-img/spain-8.jpg'
import {connect} from 'react-redux';
import {fetchCountries} from '../Actions/countriesActions';


class Spain extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCountries())
    }

    render() {
 const spain = this.props.countries.length ? this.props.countries[212] : ''
        // let spain = []
        // if(this.props.countries.length > 0) {
        //     spain = this.props.countries[212]
        // }
        return(
            <div className='container-states'>
                <div>

                </div>
            <div className='blue-states-spain'>
            <div className='about-country'>
                        <p><strong>Spain</strong>is a country in Southwestern Europe with some pockets of territory across the Strait of Gibraltar and the Atlantic Ocean.[12] Its continental European territory is situated on the Iberian Peninsula. Its territory also includes two archipelagos: the Canary Islands off the coast of North Africa, and the Balearic Islands in the Mediterranean Sea. The African enclaves of Ceuta, Melilla, and Peñón de Vélez de la Gomera,[13] makes Spain the only European country to have a physical border with an African country (Morocco).[h] Several small islands in the Alboran Sea are also part of Spanish territory. The country's mainland is bordered to the south and east by the Mediterranean Sea except for a small land boundary with Gibraltar; to the north and northeast by France, Andorra, and the Bay of Biscay; and to the west and northwest by Portugal and the Atlantic Ocean respectively.</p>
                    </div>
            </div>
            <main className='red-states'>
                <div>
                <h1>{spain.name}</h1>
                        <img src={spain.flag} alt='#'/>
                        <p><strong>Capital:</strong>
                        {spain.capital}
                        </p>
                        <p><strong>Region:</strong>
                        {spain.region}
                        </p>
                        <p><strong>Subregion:</strong>
                        {spain.subregion}
                        </p>
                        <p><strong>Borders:</strong>
                        {spain.borders}
                        </p>
                        <p><strong>Population:</strong>
                        {spain.population}
                        </p>
                        <p><strong>Language:</strong>
                        Spanish
                        </p>
                </div>
            </main>
            <div className='green-states'>
                <div className='green-child-states'>
                    <div className='one-states'><img src={spainOne} alt='#'/></div>
                    <div className='two-states'><img src={spainTwo} alt='#'/></div>
                    <div className='three-states'><img src={spainThree} alt='#'/></div>
                    <div className='four-states'><img src={spainFour} alt='#'/></div>
                    <div className='five-states'><img src={spainFive} alt='#'/></div>
                    <div className='six-states'><img src={spainSix} alt='#'/></div>
                    <div className='seven-states'><img src={spainSeven} alt='#'/></div>
                    <div className='eight-states'><img className='img-eight' src={spainEigth} alt='#'/></div>
                </div>
            </div>
        </div>
        );
    }
}


const mapStateToProps = state => ({
    countries: state.countries.countries,
})

export default connect(mapStateToProps)(Spain);