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
            <div className='yellow-states'>Left</div>
           <main className='red-states'>
                <div>
                <h1>{mexico.name}</h1>
                        <img src={mexico.flag}/>
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
                    <div className='one-states'><img src={mexicoOne}/></div>
                    <div className='two-states'><img src={mexicoTwo}/></div>
                    <div className='three-states'><img src={mexicoThree}/></div>
                    <div className='four-states'><img src={mexicoFour}/></div>
                    <div className='five-states'><img src={mexicoFive}/></div>
                    <div className='six-states'><img src={mexicoSix}/></div>
                    <div className='seven-states'><img src={mexicoSeven}/></div>
                    <div className='eight-states'><img className='img-eight' src={mexicoEigth}/></div>
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
