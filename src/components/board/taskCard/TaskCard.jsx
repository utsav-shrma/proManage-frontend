import React, { useState,useEffect } from "react";
import styles from "./TaskCard.module.css";
import Task from "../task/Task";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { priorityColorMap } from "../../../utils/constants";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { updateStatus } from "../../../apis/cards";
import { useContext } from 'react';
import { MyContext } from '../../../App';

function TaskCard({globalCollapse,taskData, cardIndex,getAllCardsData}) {
  const [editPopup, setEditPopup] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  let status =taskData.status;
  const { cardData,setCardData } = useContext(MyContext); 

  const updateCardStatus= (updatedStatus)=>{

    let response= updateStatus(taskData._id,updatedStatus);
    if(response){
      console.log(response);
    }
    getAllCardsData();
  }
    

  useEffect(()=>{
    
    setIsCollapsed(false)},[globalCollapse]);

  return (
    <div
      className={styles.container}
      onClick={(event) => {
        setEditPopup(true);
        event.stopPropagation();
      }}
    >
      <div className={styles.priority_container}>
        <div className={styles.priority}>
          <span style={{ color: priorityColorMap[taskData.priority] }}>●</span>
          <p>{taskData.priority.charAt(0).toUpperCase() + taskData.priority.slice(1)} Priority</p>
        </div>

        <div className={styles.editPopup}>
          <button
            className={styles.collapseButton}
            onClick={(event) => {
              setEditPopup(!editPopup);
              event.stopPropagation();
            }}
          >
            <MoreHorizRoundedIcon />
          </button>
          {editPopup ? (
            ""
          ) : (
            <div className={styles.duration_value}>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                Edit
              </button>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                Share
              </button>
              <button
                style={{ color: "red" }}
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <h1 className={styles.taskTitle}>{taskData.title}</h1>
      <div className={styles.checklistHeadingContainer}>
        <p>Checklist ({taskData.tasks.filter((task)=>task.isChecked===true).length}/{taskData.tasks.length})</p>
        
          {!isCollapsed ? (
            <button className={styles.taskCollapseButton} onClick={()=>{setIsCollapsed(!isCollapsed);}}>
              <KeyboardArrowDownRoundedIcon sx={{ color: "grey" }} />
            </button>
          ) : (
            <button className={styles.taskCollapseButton } onClick={()=>{setIsCollapsed(!isCollapsed);}}>
              <KeyboardArrowUpRoundedIcon sx={{ color: "grey" }} />
            </button>
          )}
        
      </div>
      
        {isCollapsed?
        <div className={styles.tasks}>
        {taskData.tasks.map((data,index)=>{
          return <Task data={data}  key={index} taskIndex={index} cardIndex={cardIndex} currStatus={taskData.status}></Task>;
        })}

      </div>:""}
        
      
      <div className={styles.footer}>
        <button> {taskData.dueDate?taskData.dueDate:"select date"}</button>
        <div className={styles.footerInside}>
          
          {status!=('backlog')?<button onClick={()=>{updateCardStatus('backlog');}}> backlog</button>:""}
          {status!=('toDo')?<button onClick={()=>{updateCardStatus('toDo');}}> toDo</button>:""}
          {status!=('done')?<button onClick={()=>{updateCardStatus('done');}}> done</button>:""}
          {status!=('inProgress')?<button onClick={()=>{updateCardStatus('inProgress');}}> inProgress</button>:""}
          {/* <button>done </button> */}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
