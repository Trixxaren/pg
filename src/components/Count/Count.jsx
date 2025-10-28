import React from "react";
import { useState } from "react";
import styles from "./Count.module.css";

const Count = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.number}>{counter}</h2>
      <button onClick={increase} className={styles.increas}>
        Increase
      </button>
      <button onClick={decrease} className={styles.decrease}>
        Decrease
      </button>
    </div>
  );
};

export default Count;
