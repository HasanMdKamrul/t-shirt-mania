import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Chill = () => {
    const ring = useContext(RingContext);
    console.log(ring)
    return (
        <div>
           <h1>Chill</h1> 
           <small>{ring}</small>
        </div>
    );
};

export default Chill;<h1>Chill</h1>