import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Chill from "../Chill/Chill";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const CountContext = createContext(0);
export const RingContext = createContext('Matir Ring');

console.log(RingContext)

const Grandpa = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={[count, setCount]}>
      <RingContext.Provider value = "diamond">
        <div className="grandpa">
          <h1>Grandpa</h1>
          <section className="flex">
            <Father />
            <Aunty />
            <Uncle />
            <Chill/>
          </section>
        </div>
      </RingContext.Provider>
      <Chill/>
    </CountContext.Provider>
  );
};

export default Grandpa;
