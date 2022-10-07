import React from "react";
import './Cart.css';

const Cart = ({ cart,removeHandler }) => {
  const totalPrice = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
  const tax = +(totalPrice * 0.1).toFixed(2);
  const grandTotal = +(totalPrice + tax).toFixed(2);

//   ** if-else conditional rendering

let message;

if ( cart.length > 3) {
    message = <p>Discount is waiting for you</p>
} else if (cart.length > 0){
    message = <p>Thanks for buying</p>
} else{
    message = <p>Please Buy</p>
}

  return (
    <div>
      <div>
        <h1 className={cart.length > 0 ? 'green' : 'red'}>Order Summary</h1>
        <p className={`bold ${cart.length === 0 || 'blue' }`} >Price:{totalPrice}</p>
        <p>Tax:{tax}</p>
        <h2>GrandTotal: {grandTotal}</h2>
      </div>
      <div>
        {
            cart.map(tshirt => (
                <div key={tshirt._id}>
                     <span>{tshirt.name}</span> 
                     <button onClick={()=> removeHandler(tshirt._id)}>X</button>
                </div>
            ))
        }
    
    {
        message
    }
    {
        cart.length === 0 && <h1> Cart is Empty ...</h1>
    }
    {
        cart.length === 2 || <h1>2 Items in Cart is loading...</h1>
    }
      </div>
    </div>
  );
};

export default Cart;
<h1>Order Summary</h1>;
