import React from 'react';
import Cousin from '../Cousin/Cousin';


const Aunty = () => {
    return (
        <div className='grandpa'>
           <h1>Aunty</h1> 
           <section className='flex'>
            <Cousin/>
            <Cousin/>
           </section>
        </div>
    );
};

export default Aunty;