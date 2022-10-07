import React from "react";

const Cart = ({ cart,removeHandler }) => {
  const totalPrice = cart.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
  const tax = +(totalPrice * 0.1).toFixed(2);
  const grandTotal = +(totalPrice + tax).toFixed(2);

  return (
    <div>
      <div>
        <h1>Order Summary</h1>
        <h3>Price:{totalPrice}</h3>
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
      </div>
    </div>
  );
};

export default Cart;
<h1>Order Summary</h1>;
