import React from 'react';
import Bro from '../Bro/Bro';

const Uncle = () => {
    return (
        <div className='grandpa'>
            <h1>Uncle</h1>
            <section className='flex'>
                <Bro/>
                <Bro/>
                <Bro/>
            </section>
        </div>
    );
};

export default Uncle;