import React from "react";
import styles from "./Task.module.css";
function Task() {
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="topping"
        name="topping"
        value="Paneer"
      ></input>
      <input
        className={styles.textarea}
        type="textarea"
        id="name"
        name="name"
      ></input>
    </div>
  );
}

export default Task;
