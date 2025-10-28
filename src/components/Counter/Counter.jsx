import React from "react";
import styles from "./Counter.module.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const improve = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>{count}</h3>
      <button style={{ padding: "10px", margin: "10px" }} onClick={improve}>
        Improve
      </button>
      <button style={{ padding: "10px" }} onClick={decrease}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
