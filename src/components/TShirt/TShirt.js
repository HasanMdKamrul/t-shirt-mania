import React from 'react';
import './TShirt.css';

const TShirt = ({addToCart,tshirt:{name,picture,price,_id}}) => {
    return (
        <div className='tshirt'>
            <h1>{name}</h1>
            <img src={picture} alt="" />
            <h4>Price: {price}</h4>
            <button onClick={()=> addToCart(_id)}>Buy This</button>
        </div>
    );
};

export default TShirt;