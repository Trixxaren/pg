// import React from "react";
// import { useState } from "react";

// const Input = () => {
//   const [name, setName] = useState("");

//   return (
//     <form>
//       <label>
//         Enter your name:
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <p>Current value: {name}</p>
//     </form>
//   );
// };

// export default Input;

// import React from "react";
// import { useState } from "react";

// const Input = () => {
//   const [name, setName] = useState("");

//   // const handleChange = (event) => {
//   //   setName(event.target.value);
//   // };

//   return (
//     <div>
//       <h3>Demo live</h3>
//       <input
//         placeholder="skriv ditt namn.."
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         value={name}
//       />
//       <p>hejj {name} </p>

//       <button onClick={(e) => setName(e.target.value)}>Rensa</button>
//       <div>{name ? <p>{name}</p> : "inget"}</div>
//     </div>
//   );
// };

// export default Input;
import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");

  const capitalizeWords = (str) => {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div
      style={{
        backgroundColor: "#f7f9fc",
        border: "1px solid #e0e4ea",
        borderRadius: "12px",
        width: "320px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "10px", color: "#333" }}>Live Input Demo</h2>

      <label style={{ display: "block", marginBottom: "10px" }}>
        <span
          style={{ display: "block", marginBottom: "6px", fontSize: "14px" }}
        >
          Skriv ditt namn i rutan
        </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Skriv ditt namn.."
          style={{
            width: "80%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </label>

      <label style={{ fontWeight: "bold", color: "#555" }}>Ditt namn är:</label>

      {name ? (
        <p
          style={{
            color: "green",
            fontSize: "18px",
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          {capitalizeWords(name)}
        </p>
      ) : (
        <p
          style={{
            color: "red",
            fontSize: "16px",
            marginTop: "10px",
          }}
        >
          Du har inget namn ännu
        </p>
      )}
    </div>
  );
};

export default Input;
