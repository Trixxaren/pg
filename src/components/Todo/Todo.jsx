import React, { useEffect, useState } from "react";
import styles from "./Todo.module.css";

const STORAGE_KEY = "todos:v1";

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // 1) LÄSA FRÅN localStorage (första gången komponenten laddas)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setTodos(parsed);
    } catch (err) {
      // Om något gått snett med JSON – börja om tomt
      console.warn("Kunde inte läsa todos från localStorage:", err);
    }
  }, []);

  // 2) SPARA TILL localStorage (varje gång todos ändras)
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.warn("Kunde inte spara todos till localStorage:", err);
    }
  }, [todos]);

  // Enkel id-generator
  const createId = () => Date.now() + Math.random();

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo = { id: createId(), text: trimmed, done: false };
    setTodos((prev) => [newTodo, ...prev]);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleClearAll = () => {
    if (confirm("Rensa alla uppgifter?")) {
      setTodos([]);
      // localStorage uppdateras automatiskt via useEffect([todos])
    }
  };

  const remaining = todos.filter((t) => !t.done).length;

  return (
    <div className={styles.app}>
      <h2 className={styles.title}>📝 Todo</h2>

      <div className={styles.row}>
        <input
          className={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Skriv en uppgift och tryck Enter…"
        />
        <button className={styles.addBtn} onClick={handleAdd}>
          Lägg till
        </button>
      </div>

      <div className={styles.list}>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.item}>
            <div className={styles.left}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggle(todo.id)}
              />
              <span
                className={`${styles.text} ${todo.done ? styles.done : ""}`}
              >
                {todo.text}
              </span>
            </div>
            <button
              className={styles.deleteBtn}
              onClick={() => handleDelete(todo.id)}
            >
              Ta bort
            </button>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        {todos.length === 0
          ? "Inga uppgifter ännu. Perfekt läge att lägga till en!"
          : `${remaining} kvar att göra av ${todos.length}.`}
      </div>

      {todos.length > 0 && (
        <div className={styles.actions}>
          <button className={styles.clearBtn} onClick={handleClearAll}>
            Rensa allt
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
