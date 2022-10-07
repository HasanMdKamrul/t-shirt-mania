import React, { useContext } from 'react';
import { CountContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [count,setCount] = useContext(CountContext);
    return (
        <div className='grandpa'>
            <h2>Special</h2>
            <small>{count}</small>
            <button onClick={()=> setCount((prevCount)=> prevCount + 1)}>Increase</button>
        </div>
    );
};

export default Special;