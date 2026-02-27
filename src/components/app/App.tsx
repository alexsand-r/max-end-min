import styles from "./App.module.css";

// ..
export const App = () => {
  return (
    <>
      <div className={styles.block}>
        <div className="container">
          <div className={styles.bodyBox}>
            <h1 className={styles.title}>Max and min</h1>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter numbers"
              className={styles.input}
            />

            <div className={styles.buttonsBlock}>
              <button type="button" className={`${styles.btn} ${styles.btnGo}`}>
                Go
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnReset}`}
              >
                Reset
              </button>
            </div>
            <div className={styles.blockResult}>
              <div className={styles.min}>
                <p>min</p>
                <span>5</span>
              </div>
              <div className={styles.max}>
                <p>max</p>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
