import React from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div>
      <form className={styles.form}>
        <label className={styles.label} for="fname">
          Name
        </label>
        <input type="text" className={styles.input} name="fname" />
        <label className={styles.label} for="pass">
          Password
        </label>
        <input type="text" className={styles.input} name="fname" />
      </form>
      <button className={styles.submit}>Sumbit</button>
    </div>
  );
}

export default LoginForm;
