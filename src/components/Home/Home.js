import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [cart, setCart] = useState([]);
  const tshirts = useLoaderData();

  const addToCart = (id) => {
    const addedProduct = tshirts.find((tshirt) => tshirt._id === id);

    const exist = cart.find((item) => item._id === id);

    if (!exist) {
      const newCart = [...cart, addedProduct];
      setCart(newCart);
    } else {
      alert("already added");
    }
  };

  const removeHandler = (id)=>{
    const remainingInCart = cart.filter(item=> item._id !== id);
    setCart(remainingInCart);
  }

  return (
    <div className="products-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <TShirt addToCart={addToCart} tshirt={tshirt} key={tshirt._id} />
        ))}
      </div>
      <div className="cart-container">
        <Cart removeHandler={removeHandler} cart={cart} />
      </div>
    </div>
  );
};

export default Home;
