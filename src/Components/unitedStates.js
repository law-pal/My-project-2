import React, {Component} from 'react';
import usaOne from '../project2-img/usa-1.jpg'
import usaTwo from '../project2-img/usa-2.jpg'
import usaThree from '../project2-img/usa-3.jpg'
import usaFour from '../project2-img/usa-4.jpg'
import usaFive from '../project2-img/usa-5.jpg'
import usaSix from '../project2-img/usa-6.jpg'
import usaSeven from '../project2-img/usa-7.jpg'
import usaEigth from '../project2-img/usa-8.jpg'


class UnitedStates extends Component {



    render() {
        return(
            <div className='container-states'>
                <div className='yellow-states'>Left</div>
                <main className='red-states'>
                    <div></div>
                </main>
                <div className='green-states'>
                    <div className='green-child-states'>
                        <div className='one-states'><img src={usaOne}/></div>
                        <div className='two-states'><img src={usaTwo}/></div>
                        <div className='three-states'><img src={usaThree}/></div>
                        <div className='four-states'><img src={usaFour}/></div>
                        <div className='five-states'><img src={usaFive}/></div>
                        <div className='six-states'><img src={usaSix}/></div>
                        <div className='seven-states'><img src={usaSeven}/></div>
                        <div className='eight-states'><img src={usaEigth}/></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default UnitedStates;