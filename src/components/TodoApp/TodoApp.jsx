import styles from "./TodoApp.module.css";

import React, { useState } from "react";

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    const trimmed = text.trim();

    if (trimmed === "") return;

    setTodo([trimmed, ...todo]);

    setText("");
    console.log(todo);
  };
  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const deleteAll = () => {
    setTodo([]);
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
        {todo.map((item, index) => {
          return (
            <li className={styles.item} key={index}>
              {item}
              <button
                onClick={() => handleDelete(index)}
                className={styles.deleteBtn}
              >
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

console.log(index);
export default TodoApp;
