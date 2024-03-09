import React,{useState,useEffect} from "react";
import styles from "./Task.module.css";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from 'react';
import { MyContext } from '../../../App';
import { checkTask } from "../../../apis/cards";

function Task({ handleCheckChange,isPopupView,data,handleTaskChange,onDelete }) {

  // useEffect(()=>{console.log("render",data)});
  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="topping"
        name="topping"
        onChange={handleCheckChange}
        
        checked={data.isChecked?"checked":""}
      ></input>
      <TextareaAutosize onChange={handleTaskChange}className={styles.textarea} value={data.task}  />
      
      {isPopupView ? (
        <button onClick={onDelete} className={styles.deleteButton}>
          <DeleteIcon  sx={{ color: "#CF3636" }}></DeleteIcon>
        </button>
      ) :""}
    </div>
  );
}

Task.defaultProps = {
  isPopupView: false
};

export default Task;
