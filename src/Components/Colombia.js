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
                        <div className='two-states'><img src={colombiaTwo}/></div>
                        <div className='three-states'><img src={colombiaThree}/></div>
                        <div className='four-states'><img src={colombiaFour}/></div>
                        <div className='five-states'><img src={colombiaFive}/></div>
                        <div className='six-states'><img src={colombiaSix}/></div>
                        <div className='seven-states'><img src={colombiaSeven}/></div>
                        <div className='eight-states'><img className='img-eight' src={colombiaEight}/></div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Colombia;