import React from "react";
import { useState } from "react";

const LiveInput = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <h3>Live demo input</h3>
      <input
        type="text"
        placeholder="skriv ditt namn.."
        onChange={handleChange}
      />
      <div>
        {name ? (
          <p>Hej {name} vad gör du?</p>
        ) : (
          <p>"skriv ditt namn i rutan ovanför"</p>
        )}
        <button onClick={() => setName("")}>Rensa</button>
      </div>
    </div>
  );
};

export default LiveInput;
