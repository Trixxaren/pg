import React from "react";
import styles from "./Erik.module.css";

const Erik = () => {
  const array = ["Erik", "Sandra", "Robin", "id"];

  const family = [
    { id: 1, name: "Sandra", age: 12 },
    { id: 2, name: "Robin", age: 32 },
    { id: 3, name: "Erik", age: 21 },
    { id: 4, name: "Emma", age: 29 },
  ];

  console.log(family);
  return (
    <div>
      <h3
        style={{
          backgroundColor: "green",
          borderRadius: "12px",
          width: "100px",
          margin: "2px auto",
        }}
      >
        {array.map((name) => {
          return (
            <div
              style={{
                color: "white",
                margin: "2px auto",
                padding: "10px",
              }}
            >
              {name}
            </div>
          );
        })}
      </h3>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {family.map((u) => (
            <div
              key={u.id}
              style={{
                backgroundColor: "royalblue",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "250px",
                textAlign: "center",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
            >
              <h3
                style={{
                  color: "white",
                }}
              >
                {u.name}
              </h3>
              <p
                style={{
                  color: "white",
                }}
              >
                Jag har ID: {u.id} och är {u.age} gammal{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Erik;
