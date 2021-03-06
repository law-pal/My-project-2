import React, {Component} from 'react';
import mexicoOne from '../project2-img/mexico-1.jpg'
import mexicoTwo from '../project2-img/mexico-2.jpg'
import mexicoThree from '../project2-img/mexico-3.jpg'
import mexicoFour from '../project2-img/mexico-4.jpg'
import mexicoFive from '../project2-img/mexico-5.jpg'
import mexicoSix from '../project2-img/mexico-6.jpg'
import mexicoSeven from '../project2-img/mexico-7.jpg'
import mexicoEigth from '../project2-img/mexico-8.jpg'
import {connect} from 'react-redux';
import {fetchCountries} from '../Actions/countriesActions';

class Mexico extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCountries())
    }
    render() {
        const mexico = this.props.countries.length ? this.props.countries[144] : ''
        // let mexico = []
        // if(this.props.countries.length > 0) {
        //     mexico = this.props.countries[212]
        // }
        // console.log(mexico)
        return(
            <div className='container-states'>
                 <div></div>
            <div className='blue-states-mexico'>
            <div className='about-country'>
                        <p><strong>Mexico</strong><br/>officially the United Mexican States is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico.Mexico covers 1,972,550 square kilometers (761,610 sq mi) and has approximately 128,649,565 inhabitants,making it the world's 13th-largest country by area, 10th-most populous country, and most populous Spanish-speaking nation. It is a federation comprising 31 states and Mexico City, its capital city and largest metropolis. Other major urban areas include Guadalajara, Monterrey, Puebla, Toluca, Tijuana, Ciudad Juárez, and León.</p>
                    </div>
            </div>
           <main className='red-states'>
                <div>
                <h1>{mexico.name}</h1>
                        <img src={mexico.flag} alt='#'/>
                        <p><strong>Capital:</strong>
                        {mexico.capital}
                        </p>
                        <p><strong>Region:</strong>
                        {mexico.region}
                        </p>
                        <p><strong>Subregion:</strong>
                        {mexico.subregion}
                        </p>
                        <p><strong>Borders:</strong>
                        {mexico.borders}
                        </p>
                        <p><strong>Population:</strong>
                        {mexico.population}
                        </p>
                        <p><strong>Language:</strong>
                        Spanish
                        </p>
                </div>
            </main>
            <div className='green-states'>
                <div className='green-child-states'>
                    <div className='one-states'><img src={mexicoOne} alt='#'/></div>
                    <div className='two-states'><img src={mexicoTwo} alt='#'/></div>
                    <div className='three-states'><img src={mexicoThree} alt='#'/></div>
                    <div className='four-states'><img src={mexicoFour} alt='#'/></div>
                    <div className='five-states'><img src={mexicoFive} alt='#'/></div>
                    <div className='six-states'><img src={mexicoSix} alt='#'/></div>
                    <div className='seven-states'><img src={mexicoSeven} alt='#'/></div>
                    <div className='eight-states'><img className='img-eight' src={mexicoEigth} alt='#'/></div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    countries: state.countries.countries,
})

export default connect(mapStateToProps)(Mexico);
