import React, { useState } from "react";
import styles from "./RandomUser.module.css";

const RandomUser = () => {
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        console.log("hämtad användare:", data.results[0]);
      })
      .catch((err) => console.error("Fel vid hämtning:", err));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Slumäpmässig användare</h2>
      <button onClick={fetchUser} className={styles.button}>
        Hämta användare
      </button>

      {user && (
        <div className={styles.card}>
          <img
            src={user.picture.large}
            alt={user.name.first}
            className={styles.avatar}
          />
          <p>{user.name.title}</p>

          <h3>
            {user.name.first} {user.name.last}
          </h3>
          <p>
            <span style={{ color: "green" }}>Age:</span>
            {user.dob.age}
          </p>
          <h4>
            {user.location.country} - {user.location.city}
          </h4>
          <p>
            <span style={{ color: "green" }}>Email:</span>
            {user.email}
          </p>
          <p>
            <span style={{ color: "green" }}>Number:</span> {user.phone}
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomUser;
