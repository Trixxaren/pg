import React from "react";
import { useState } from "react";
import styles from "./Click.module.css";

const Click = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h3 className={styles.count}>{count}</h3>
      <button onClick={() => setCount(count + 1000)}>+ 1000</button>
      <button onClick={() => setCount(count + 10)}>+ 10</button>
      <button onClick={() => setCount(count - 10)}>- 10</button>
      <button onClick={() => setCount(count - 1000)}>- 1000</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Click;
