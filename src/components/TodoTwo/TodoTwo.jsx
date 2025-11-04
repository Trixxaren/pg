import React, { useState } from "react";

const TodoTwo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    const trimmed = text.trim();

    if (trimmed === "") return;

    setTodo([trimmed, ...todo]);

    setText("");
  };

  const deleteAll = () => setTodo([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div>
      <h2>Todo</h2>
      <input
        placeholder="Skriv en todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={deleteAll}>Delete all</button>
    </div>
  );
};

export default TodoTwo;
