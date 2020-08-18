import React, {Component} from 'react';
import colombiaOne from '../project2-img/colombia-1.jpg'
import colombiaTwo from '../project2-img/colombia-2.jpg'
import colombiaThree from '../project2-img/colombia-3.jpg'
import colombiaFour from '../project2-img/colombia-4.jpg'
import colombiaFive from '../project2-img/colombia-5.jpg'
import colombiaSix from '../project2-img/colombia-6.jpg'
import colombiaSeven from '../project2-img/colombia-7.jpg'
import colombiaEight from '../project2-img/colombia-8.jpg'


class Colombia extends Component {



    render() {
        return(
            <div className='container-states'>
                <div className='yellow-states'>Left</div>
                <main className='red-states'>
                    <div></div>
                </main>
                <div className='green-states'>
                    <div className='green-child-states'>
                        <div className='one-states'><img src={colombiaOne}/></div>
                        <div className='two-states'><img src={usaTwo}/></div>
                        <div className='three-states'><img src={usaThree}/></div>
                        <div className='four-states'><img src={usaFour}/></div>
                        <div className='five-states'><img src={usaFive}/></div>
                        <div className='six-states'><img src={usaSix}/></div>
                        <div className='seven-states'><img src={usaSeven}/></div>
                        <div className='eight-states'><img className='miami' src={usaEigth}/></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Colombia;