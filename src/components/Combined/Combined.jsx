import React, { useState } from "react";

const Combined = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const maxGoal = 10;
  const percent = Math.min(
    100,
    Math.max(0, Math.round((count / maxGoal) * 100))
  );

  const handleName = (event) => {
    setName(event.target.value);
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        background: "#f8fafc",
        borderRadius: "16px",
        padding: "20px",
        width: "320px",
        margin: "40px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#1e293b" }}>
        Kombinerade state
      </h2>

      <label style={{ display: "block", marginBottom: "10px" }}>
        Skriv ditt namn här:
        <input
          type="text"
          value={name}
          placeholder="Skriv ditt namn.."
          onChange={handleName}
          style={{
            display: "block",
            width: "100%",
            marginTop: "6px",
            marginBottom: "12px",
            padding: "8px 0px 8px 0px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            outline: "none",
          }}
        />
      </label>
      <label style={{ display: "block" }}>
        Skriv här:
        <textarea
          placeholder="Skriv här.."
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            height: 80,
            marginTop: "6px",
            marginBottom: "12px",
            padding: "8px 0px 8px 0px",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            resize: "none",
            outline: "none",
          }}
        />
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <button
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "none",
              background: "#f59e0b",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setCount(count + 1)}
          >
            + 1
          </button>
          <button
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "none",
              background: "#f59e0b",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => setCount(count > 0 ? count - 1 : 0)}
          >
            - 1
          </button>
          <button
            onClick={() => {
              setCount(0);
              setText("");
              setName("");
            }}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "none",
              background: "#f59e0b",
              color: "white",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      </label>
      {/* Progress bar */}
      <div style={{ marginTop: 10 }}>
        <div
          style={{
            height: 10,
            background: "#e2e8f0",
            borderRadius: 999,
            overflow: "hidden",
            border: "1px solid #cbd5e1",
          }}
          aria-label="Progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={maxGoal}
          aria-valuenow={Math.min(count, maxGoal)}
        >
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              background: "#10b981",
              transition: "width 200ms linear",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: "#475569",
            marginTop: 6,
          }}
        >
          <span>
            {Math.min(count, maxGoal)} / {maxGoal}
          </span>
          <span>{percent}%</span>
        </div>
      </div>
      <p
        style={{
          marginTop: "16px",
          background: "#fff",
          padding: "12px",
          borderRadius: "8px",
          fontSize: "14px",
          border: "1px solid #e2e8f0",
        }}
      >
        Ditt namn är: <strong>{name || "..."}</strong>
        <br /> Det du skrev: <strong>{text || "..."}</strong>
        <br /> Du klickade till siffran: <strong>{count}</strong>
      </p>
      {/* CONDITIONAL BADGE */}
      {count >= 5 && (
        <div
          style={{
            marginTop: "12px",
            textAlign: "center",
            background: "#10b981",
            color: "white",
            padding: "8px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          🎉 Bra jobbat {name || "vän"}! Du nådde {count} klick!
        </div>
      )}
      {name >= " " && (
        <div
          style={{
            marginTop: "12px",
            textAlign: "center",
            background: "#aeb910ff",
            color: "white",
            padding: "8px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Bra jobbat du skrev {name || "namn"}
        </div>
      )}
    </div>
  );
};

export default Combined;
