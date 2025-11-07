// import React, { useState } from "react";

// const Random = () => {
//   const [user, setuser] = useState(null);
//   const [users, setUsers] = useState([]);
//   const [isloading, setIsloading] = useState(false);

//   const fetchUser = () => {
//     setIsloading(true);
//     fetch("https://randomuser.me/api")
//       .then((res) => res.json())
//       .then((data) => {
//         setuser(data.results[0]);
//       })
//       .catch((err) => console.log("fel vid hämtning", err))
//       .finally(() => setIsloading(false));
//   };

//   const fetchFive = () => {
//     setIsloading(true);
//     fetch("https://randomuser.me/api/?results=5")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data.results);
//       })
//       .catch((err) => console.log("fel vid hämtning (5)", err))
//       .finally(() => setIsloading(false));
//   };

//   const fetchTwo = () => {
//     setIsloading(true);
//     fetch("https://randomuser.me/api/?results=2")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data.results);
//       })
//       .catch((err) => console.log("fel vid hämtning (2)", err))
//       .finally(() => setIsloading(false));
//   };

//   return (
//     <div>
//       <h3>Random person</h3>
//       <button onClick={fetchUser}>{isloading ? "hämtar..." : "hämta 1"}</button>

//       {isloading && !user && <p style={{ marginTop: 8 }}>Laddar person…</p>}

//       {user && !isloading && (
//         <div>
//           <img src={user.picture.large} />
//           <h3>
//             {user.name.first} {user.name.last}
//           </h3>
//         </div>
//       )}

//       <button onClick={fetchFive}>
//         {isloading ? "Hämtar 5..." : "Hämta 5"}
//       </button>
//       <div>
//         {users.map((person) => (
//           <div key={person.login.uuid}>
//             <img src={person.picture.large} />
//             <h3>
//               {person.name.first} {person.name.last}
//             </h3>
//           </div>
//         ))}
//       </div>

//       <button onClick={fetchTwo}>{isloading ? "Hämtar 2.." : "Hämta"}</button>
//       <div>
//         {users.map((person) => (
//           <div key={person.login.uuid}>
//             <img src={person.picture.large} />
//             <h3>
//               {person.name.first} {person.name.last}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Random;

import React, { useState } from "react";

const Random = () => {
  const [user, setUser] = useState(null);
  const [loading, setIsloading] = useState(false);

  const fetchUser = () => {
    setIsloading(true);
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((err) => console.log("Fel vid hämtning", err))
      .finally(() => setIsloading(false));
  };

  return (
    <div>
      <h3>Random person</h3>
      <button onClick={fetchUser}>
        {loading ? "Laddar person.." : "Hämta"}
      </button>

      {user && !loading && (
        <div>
          <img
            style={{ border: "2px solid black", borderRadius: "50%" }}
            src={user.picture.large}
          />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      )}
    </div>
  );
};

export default Random;
