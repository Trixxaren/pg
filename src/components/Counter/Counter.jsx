import React from "react";
import styles from "./Counter.module.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
