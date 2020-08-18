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
        const poertugal = this.props.countries.length ? this.props.countries[179] : ''
        // let portugal = []
        // if(this.props.countries.length > 0) {
        //     portugal = this.props.countries[212]
        // }
        // console.log(portugal)
        return(
            <div className='container-states'>
            <div className='yellow-states'>Left</div>
            <main className='red-states'>
                <div>
                <h1>{portugal.name}</h1>
                        <img src={portugal.flag}/>
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
                    <div className='one-states'><img src={portugalOne}/></div>
                    <div className='two-states'><img src={portugalTwo}/></div>
                    <div className='three-states'><img src={portugalThree}/></div>
                    <div className='four-states'><img src={portugalFour}/></div>
                    <div className='five-states'><img src={portugalFive}/></div>
                    <div className='six-states'><img src={portugalSix}/></div>
                    <div className='seven-states'><img src={portugalSeven}/></div>
                    <div className='eight-states'><img className='img-eight' src={portugalEigth}/></div>
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

export default connect(mapStateToProps)(Portugal);