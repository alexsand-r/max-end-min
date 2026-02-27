import { useState } from "react";
import styles from "./App.module.css";
import { maxAndMin } from "../../utils/funcMinAddMax";

// ..
export const App = () => {
  const [value, setValue] = useState<string>(""); // стан для інпута
  const [maxValue, setMaxValue] = useState<string>(""); // стан для макс значення
  const [minValue, setMinValue] = useState<string>(""); // стан для мін значення
  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleGo = () => {
    const formattedValue = value.split("").join(" ");
    const result = maxAndMin(formattedValue);

    const [max, min] = result.split(" ");
    setMaxValue(max);
    setMinValue(min);
  };
  const handleReset = () => {
    setValue("");
    setMaxValue("");
    setMinValue("");
  };

  return (
    <>
      <div className={styles.block}>
        <div className="container">
          <div className={styles.bodyBox}>
            <h1 className={styles.title}>Max and Min number</h1>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter numbers"
              className={styles.input}
              value={value}
              onChange={getValue}
            />

            <div className={styles.buttonsBlock}>
              <div className={styles.column}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnGo}`}
                  onClick={handleGo}
                >
                  Go
                </button>

                <p>max</p>
                <span>{maxValue}</span>
              </div>
              <div className={styles.column}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.btnReset}`}
                  onClick={handleReset}
                >
                  Reset
                </button>

                <p>min</p>
                <span>{minValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
