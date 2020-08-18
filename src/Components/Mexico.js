import React, {Component} from 'react';
import mexicoOne from '../project2-img/mexico-1.jpg'
import mexicoTwo from '../project2-img/mexico-2.jpg'
import mexicoThree from '../project2-img/mexico-3.jpg'
import mexicoFour from '../project2-img/mexico-4.jpg'
import mexicoFive from '../project2-img/mexico-5.jpg'
import mexicoSix from '../project2-img/mexico-6.jpg'
import mexicoSeven from '../project2-img/mexico-7.jpg'
import mexicoEigth from '../project2-img/mexico-8.jpg'

class Mexico extends Component {



    render() {
        return(
            <div className='container-states'>
            <div className='yellow-states'>Left</div>
            <main className='red-states'>
                <div></div>
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


export default Mexico;