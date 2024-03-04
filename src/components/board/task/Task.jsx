import React,{useState,useEffect} from "react";
import styles from "./Task.module.css";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from 'react';
import { MyContext } from '../../../App';

function Task({ cardIndex,taskIndex,isPopupView,data,currStatus }) {
  const { cardData,setCardData } = useContext(MyContext);  
  const [checkFlag,setCheckFlag]=useState(data.isChecked);

  useEffect(()=>{
    setCheckFlag(data.isChecked)
  },[data.isChecked])
  
    const handleCheckChange=()=>{
      setCardData((cardData) => {
        const updatedCardData = { ...cardData }; // Make a shallow copy of the state
        updatedCardData[currStatus][cardIndex].tasks[taskIndex].isChecked = !checkFlag;   
        return updatedCardData;
      });
     
     
    }

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="topping"
        name="topping"
        onChange={handleCheckChange}
        
        checked={checkFlag?"checked":""}
      ></input>
      <TextareaAutosize className={styles.textarea} value={data.task}  />
      
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
