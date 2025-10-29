// const User = ({ name, age, color }) => {
//   return (
//     <div
//       style={{
//         backgroundColor: color,
//         margin: "10px",
//         padding: "10px",
//         textAlign: "center",
//         color: "white",
//         borderRadius: "10px",
//       }}
//     >
//       <p>
//         Jag heter {name} och är {age} år gammal.
//       </p>
//     </div>
//   );
// };

// export default User;

import React from "react";

const User = () => {
  const array = ["Robin", "Emmma", "Alfons"];

  const object = [
    { id: 1, name: "Robin" },
    { id: 2, name: "Emma" },
  ];

  return (
    <div>
      <div>
        {array.map((name, index) => {
          return (
            <h3>
              index: {index}.<br /> Namn: {name}
            </h3>
          );
        })}
      </div>
      <div>
        {object.map((u) => {
          return (
            <div key={u.id}>
              <h1>namn:{u.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
