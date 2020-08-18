import React, {Component} from 'react';
import portugalOne from '../project2-img/portugal-1.jpeg'
import portugalTwo from '../project2-img/portugal-2.jpg'
import portugalThree from '../project2-img/portugal-3.jpg'
import portugalFour from '../project2-img/portugal-4.jpg'
import portugalFive from '../project2-img/portugal-5.jpg'
import portugalSix from '../project2-img/portugal-6.jpg'
import portugalSeven from '../project2-img/portugal-7.jpg'
import portugalEigth from '../project2-img/portugal-8.jpg'




class Portugal extends Component {



    render() {
        return(
            <div className='container-states'>
            <div className='yellow-states'>Left</div>
            <main className='red-states'>
                <div></div>
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


export default Portugal;