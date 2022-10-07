import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import './Home.css';

const Home = () => {
  const tshirts = useLoaderData();
  console.log(tshirts);

  return (
    <div className="products-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <TShirt tshirt={tshirt} key={tshirt._id} />
        ))}
      </div>
      <div className="cart-container">
        <Cart/>
      </div>
    </div>
  );
};

export default Home;
