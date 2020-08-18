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
        // console.log(spain)
        return(
            <div className='container-states'>
                <div>

                </div>
            <div className='yellow-states'>Left</div>
            <main className='red-states'>
                <div>
                <h1>{spain.name}</h1>
                        <img src={spain.flag}/>
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
                    <div className='one-states'><img src={spainOne}/></div>
                    <div className='two-states'><img src={spainTwo}/></div>
                    <div className='three-states'><img src={spainThree}/></div>
                    <div className='four-states'><img src={spainFour}/></div>
                    <div className='five-states'><img src={spainFive}/></div>
                    <div className='six-states'><img src={spainSix}/></div>
                    <div className='seven-states'><img src={spainSeven}/></div>
                    <div className='eight-states'><img className='img-eight' src={spainEigth}/></div>
                </div>
            </div>
        </div>
        );
    }
}


const mapStateToProps = state => ({
    countries: state.countries.countries,
    // loading: state.countries.loading,
    // hasErrors: state.countries.hasErrors
})

export default connect(mapStateToProps)(Spain);