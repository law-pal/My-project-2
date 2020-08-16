import React from 'react';


const Country = (props) => {
       
    return (
        <div>
           <h1> {props.nation.name}</h1> 
            <p>{props.nation.region}</p>
        </div>
    );
}


export default Country;