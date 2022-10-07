import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import './Home.css';

const Home = () => {
    const [cart,setCart] = useState([]);
  const tshirts = useLoaderData();
  
  const addToCart = (id)=>{
    const addedProduct = tshirts.find(tshirt => tshirt._id === id);

    let newCart = [];

    if (addedProduct) {
         newCart = [...cart,addedProduct];
    };

   setCart(newCart)

  }



  return (
    <div className="products-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <TShirt addToCart={addToCart} tshirt={tshirt} key={tshirt._id} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Home;
