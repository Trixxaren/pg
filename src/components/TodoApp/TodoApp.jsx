// import React, { useState } from "react";
import styles from "./TodoApp.module.css";

// const TodoApp = () => {
//   const [todo, setTodo] = useState([]);
//   const [text, setText] = useState("");

//   const handleAdd = () => {
//     const trimmed = text.trim();
//     // om inget är skrivet, gör inget
//     if (trimmed === "") return;
//     // ny listta med den nya uppgiften längst upp
//     setTodo([trimmed, ...todo]);

//     // tömmer inputfältet efter
//     setText("");
//   };

//   return (
//     <div className={styles.app}>
//       <h2 className={styles.title}>Todo Lista</h2>

//       <input
//         className={styles.input}
//         value={text}
//         placeholder="skriv en uppgift"
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button className={styles.addBtn} onClick={handleAdd}>
//         Lägg till todo
//       </button>

//       <ul className={styles.list}>
//         {todo.map((todo, index) => {
//           return (
//             <li key={index} className={styles.item}>
//               {todo}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;

import React, { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    const trimmed = text.trim();

    if (trimmed === "") return;

    setTodo([trimmed, ...todo]);

    setText("");
  };
  const handleDelete = (index) => {
    const copy = [...todo];
    copy.splice(index, 1);
    setTodo(copy);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const deleteAll = (index) => {
    const copy = [...todo];
    copy.splice(index);
    setTodo(copy);
  };

  return (
    <div className={styles.app}>
      <h2 className={styles.title}>Todo Lista</h2>
      <input
        className={styles.input}
        placeholder="skriv en todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.addBtn} onClick={handleAdd}>
        Lägg till
      </button>
      <ul className={styles.list}>
        {todo.map((todo, index) => {
          return (
            <li className={styles.item} key={index}>
              {todo}
              <button onClick={handleDelete} className={styles.deleteBtn}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={deleteAll} className={styles.deletAllBtn}>
        Radera alla
      </button>
    </div>
  );
};

export default TodoApp;
