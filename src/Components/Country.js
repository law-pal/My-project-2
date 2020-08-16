import React from 'react';


const Country = (props) => {
       
    return (
        <div className='container'>
            <div className='card'>
                    <div className='card-header'>
                        <img className='flags' src={props.nation.flag} alt='#'/>
                    </div>
                    <div className='card-body'>
                    <h2>{props.nation.name}</h2>
                    <p>
                        <strong>Population:</strong>
                        {props.nation.population}
                    </p>
                    <p>
                        <strong>Region:</strong>
                        {props.nation.region}
                    </p>
                    <p>
                        <strong>Capital:</strong>
                        {props.nation.capital}
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Country;