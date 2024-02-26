import React from "react";
import styles from "./Task.module.css";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { useTheme } from '@mui/system';



function Task() {

  const priorityColor=(status)=>{
    if(status==='low'){}
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="topping"
        name="topping"
      ></input>
      <TextareaAutosize
        className={styles.textarea}
        
      />
      </div>
  );
}




export default Task;
