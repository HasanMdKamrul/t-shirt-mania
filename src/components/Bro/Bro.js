import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Bro = () => {
    const ring = useContext(RingContext);
   
    return (
        <div className='grandpa'>
         <h1>Bro</h1>  
          <small>{ring}</small>
        </div>
    );
};

export default Bro;