import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // styr start/stopp

  useEffect(() => {
    if (!isRunning) return; // om vi inte kör, gör ingenting
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id); // Stänger ner om komponenten försvinner
  }, [isRunning]); // kör effekt när isRunning ändras

  return (
    <div>
      <h2>Timer</h2>
      <p>{seconds} sekunder</p>

      <button onClick={() => setIsRunning(true)}>Starta</button>
      <button onClick={() => setIsRunning(false)}>Stoppa</button>
      <button onClick={() => setSeconds(0)}>Reseta</button>
    </div>
  );
};

export default Timer;
