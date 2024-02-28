import React from "react";
import styles from "./Task.module.css";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import DeleteIcon from "@mui/icons-material/Delete";

function Task({ isPopupView }) {

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="topping"
        name="topping"
      ></input>
      <TextareaAutosize className={styles.textarea} />
      
      {isPopupView ? (
        <button className={styles.deleteButton}>
          <DeleteIcon sx={{ color: "#CF3636" }}></DeleteIcon>
        </button>
      ) :""}
    </div>
  );
}

Task.defaultProps = {
  isPopupView: false
};

export default Task;
