import React, { useState } from "react";
import styles from "./Calc.module.css";

export default function Calc() {
  const [display, setDisplay] = useState("0"); // visas (sträng!)
  const [previous, setPrevious] = useState(null); // lagrat tal (sträng)
  const [operator, setOperator] = useState(null); // "+", "−", "×", "÷"
  const [overwrite, setOverwrite] = useState(false); // skriv-över efter "="

  const write = (ch) => {
    setDisplay((prev) => {
      if (overwrite) {
        setOverwrite(false);
        return ch === "." ? "0." : ch;
      }
      if (ch === ".") {
        if (prev.includes(".")) return prev;
        return prev + ".";
      }
      if (prev === "0") return ch; // ersätt ledande nolla
      return prev + ch;
    });
  };

  const clearAll = () => {
    setDisplay("0");
    setPrevious(null);
    setOperator(null);
    setOverwrite(false);
  };

  const toggleSign = () => {
    setDisplay((prev) => {
      if (prev === "0" || prev === "0.") return prev;
      return prev.startsWith("-") ? prev.slice(1) : "-" + prev;
    });
  };

  const percent = () => {
    setDisplay((prev) => {
      const v = parseFloat(prev);
      if (Number.isNaN(v)) return prev;
      return String(v / 100);
    });
  };

  const chooseOperator = (op) => {
    // Kedjeräkning: om vi har previous + operator -> räkna först
    if (previous !== null && operator !== null && !overwrite) {
      const res = compute(previous, display, operator);
      setPrevious(res);
      setDisplay("0");
      setOperator(op);
      return;
    }
    setPrevious(display);
    setOperator(op);
    setDisplay("0");
    setOverwrite(false);
  };

  const equals = () => {
    if (previous === null || operator === null) return;
    const res = compute(previous, display, operator);
    setDisplay(res);
    setPrevious(null);
    setOperator(null);
    setOverwrite(true); // nästa siffra startar nytt tal
  };

  return (
    <div className={styles.container}>
      <div className={styles.display} aria-live="polite">
        {display}
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.greyBtn} onClick={clearAll}>
          AC
        </button>
        <button className={styles.greyBtn} onClick={toggleSign}>
          +/−
        </button>
        <button className={styles.greyBtn} onClick={percent}>
          %
        </button>
        <button
          className={styles.yellowBtn}
          data-active={operator === "÷"}
          onClick={() => chooseOperator("÷")}
          aria-pressed={operator === "÷"}
        >
          ÷
        </button>

        <button className={styles.darkGreyBtn} onClick={() => write("7")}>
          7
        </button>
        <button className={styles.darkGreyBtn} onClick={() => write("8")}>
          8
        </button>
        <button className={styles.darkGreyBtn} onClick={() => write("9")}>
          9
        </button>
        <button
          className={styles.yellowBtn}
          data-active={operator === "×"}
          onClick={() => chooseOperator("×")}
          aria-pressed={operator === "×"}
        >
          ×
        </button>

        <button className={styles.darkGreyBtn} onClick={() => write("4")}>
          4
        </button>
        <button className={styles.darkGreyBtn} onClick={() => write("5")}>
          5
        </button>
        <button className={styles.darkGreyBtn} onClick={() => write("6")}>
          6
        </button>
        <button
          className={styles.yellowBtn}
          data-active={operator === "−"}
          onClick={() => chooseOperator("−")}
          aria-pressed={operator === "−"}
        >
          −
        </button>

        <button className={styles.darkGreyBtn} onClick={() => write("1")}>
          1
        </button>
        <button className={styles.darkGreyBtn} onClick={() => write("2")}>
          2
        </button>
        <button className={styles.darkGreyBtn} onClick={() => write("3")}>
          3
        </button>
        <button
          className={styles.yellowBtn}
          data-active={operator === "+"}
          onClick={() => chooseOperator("+")}
          aria-pressed={operator === "+"}
        >
          +
        </button>

        <button className={styles.darkGreyBigBtn} onClick={() => write("0")}>
          0
        </button>
        <button className={styles.darkGreyBtn} onClick={() => write(".")}>
          .
        </button>
        <button className={styles.yellowBtn} onClick={equals}>
          =
        </button>
      </div>
    </div>
  );
}

// — matte —
function compute(aStr, bStr, op) {
  const a = parseFloat(aStr);
  const b = parseFloat(bStr);
  if (Number.isNaN(a) || Number.isNaN(b)) return "0";

  switch (op) {
    case "+":
      return String(a + b);
    case "−":
      return String(a - b); // OBS: U+2212 (långt minus)
    case "×":
      return String(a * b); // U+00D7
    case "÷":
      return b === 0 ? "Error" : String(a / b); // U+00F7
    default:
      return bStr;
  }
}
