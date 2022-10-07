import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt:{name,picture,price}}) => {
    return (
        <div className='tshirt'>
            <h1>{name}</h1>
            <img src={picture} alt="" />
            <h4>Price: {price}</h4>
            <button>Buy This</button>
        </div>
    );
};

export default TShirt;