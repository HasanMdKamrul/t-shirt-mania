import React, { useContext } from 'react';
import { CountContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [count] = useContext(CountContext);
    return (
        <div className='grandpa'>
            <p>friend</p>
            <small>{count}</small>
        </div>
    );
};

export default Friend;