import React, { useState } from "react";

const Random = () => {
  const [user, setuser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const fetchUser = () => {
    setIsloading(true);
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        setuser(data.results[0]);
      })
      .catch((err) => console.log("fel vid hämtning", err))
      .finally(() => setIsloading(false));
  };

  const fetchFive = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((err) => console.log("fel vid hämtning (5)", err));
  };

  const fetchTwo = () => {
    fetch("https://randomuser.me/api/?results=2")
      .then((res) => res.json())
      .then((data) => {
        setUsers;
      });
  };

  return (
    <div>
      <h3>Random person</h3>
      <button onClick={fetchUser}>{isloading ? "hämtar..." : "hämta 1"}</button>

      {/* Liten loading-text för en person */}
      {isloading && !user && <p style={{ marginTop: 8 }}>Laddar person…</p>}

      {user && !isloading && (
        <div>
          <img src={user.picture.large} />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
        </div>
      )}

      <button onClick={fetchFive}>Hämta 5</button>
      <div>
        {users.map((person) => (
          <div key={person.login.uuid}>
            <img src={person.picture.large} />
            <h3>
              {person.name.first} {person.name.last}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Random;
