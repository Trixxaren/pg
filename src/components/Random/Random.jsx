// import React, { useState } from "react";

// const Random = () => {
//   const [user, setuser] = useState(null);
//   const [users, setUsers] = useState([]);

//   const fetchUser = () => {
//     fetch("https://randomuser.me/api")
//       .then((res) => res.json())
//       .then((data) => {
//         setuser(data.results[0]);
//       })
//       .catch((err) => console.log("fel vid hämtning", err));
//   };

//   const fetchFive = () => {
//     fetch("https://randomuser.me/api/?results=5")
//       .then((res) => res.json())
//       .then((data) => {
//         setUsers(data.results);
//       })
//       .catch((err) => console.log("fel vid hämtning (5)", err));
//   };

//   return (
//     <div>
//       <h3>Random person</h3>
//       <button onClick={fetchUser}>Hämta</button>

//       {user && (
//         <div>
//           <img src={user.picture.large} />
//           <h3>
//             {user.name.first} {user.name.last}
//           </h3>
//         </div>
//       )}

//       <button onClick={fetchFive}>Hämta 5</button>
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
  const [users, setUsers] = useState([]);

  // 🪵 fetchLogger som loggar allt
  const fetchLogger = async (url) => {
    console.log("📡 Startar fetch till:", url);

    try {
      const res = await fetch(url);
      console.log("✅ Statuskod:", res.status);

      const data = await res.json();
      console.log("📦 Data mottagen:", data);

      return data;
    } catch (err) {
      console.error("❌ Fel vid fetch:", err);
    }
  };

  // 🔸 En användare
  const fetchUser = async () => {
    const data = await fetchLogger("https://randomuser.me/api");
    if (data && data.results && data.results.length > 0) {
      setUser(data.results[0]);
    }
  };

  // 🔸 Fem användare
  const fetchFive = async () => {
    const data = await fetchLogger("https://randomuser.me/api/?results=5");
    if (data && data.results) {
      setUsers(data.results);
    }
  };

  return (
    <div>
      <h3>Random person</h3>

      <button onClick={fetchUser}>Hämta 1</button>
      {user && (
        <div>
          <img src={user.picture.large} alt={user.name.first} />
          <h3>
            {user.name.first} {user.name.last}
          </h3>
        </div>
      )}

      <button onClick={fetchFive}>Hämta 5</button>
      <div>
        {users.map((person) => (
          <div key={person.login.uuid}>
            <img src={person.picture.large} alt={person.name.first} />
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
