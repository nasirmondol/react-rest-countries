import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {flags, name, area, region} = props.country;
    return (
        <div className='country bg-success'>
            <img src={flags.png} alt="" />
           <h2>single country: {name.common}</h2> 
           <p>Area: {area}</p>
           <p>Region: {region}</p>
        </div>
    );
};

export default Country;