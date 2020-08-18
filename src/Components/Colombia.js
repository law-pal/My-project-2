import React, {Component} from 'react';
import colombiaOne from '../project2-img/colombia-1.jpg'


class Colombia extends Component {



    render() {
        return(
            <div className='container-united'>
            <div className='yellow'>Left</div>
            <main className='red'>Main</main>
            <div className='green-states'>
                <div className='green-child-states'>
                    <div className='one-states'><img src={colombiaOne}/></div>
                    <div className='two-states'>2</div>
                    <div className='three-states'>3</div>
                    <div className='four-states'>4</div>
                    <div className='five-states'>5</div>
                    <div className='six-states'>6</div>
                    <div className='seven-states'>7</div>
                    <div className='eight-states'>8</div>
                </div>
            </div>
        </div>
        );
    }
}


export default Colombia;