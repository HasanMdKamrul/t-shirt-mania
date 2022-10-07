import React from 'react';
import '../Grandpa/Grandpa.css';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='grandpa'>
            <h1>Father</h1>
            <section className='flex'>
                <Myself/>
                <Sister/>
            </section>
        </div>
    );
};

export default Father;