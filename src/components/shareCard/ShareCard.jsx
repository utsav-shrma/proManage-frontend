import React from "react";
import styles from "./ShareCard.module.css";
import logo from "../../assets/icons/codesandbox.png";
import Task from "../board/task/Task";

import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { priorityColorMap } from "../../utils/constants";
function ShareCard() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <div  className={styles.tab_container}>
          <img className={styles.logo_image} src={logo}></img>
          <h1 className={styles.logo_heading}>Pro Manage</h1>
          </div>
        </div>
        <div className={styles.cardContainer}>
      <div className={styles.container}>
        <div className={styles.priority_container}>
          <div className={styles.priority}>
            <span style={{ color: priorityColorMap["low"] }}>●</span>
            <p>High Priority</p>
          </div>
        </div>
        <h1 className={styles.taskTitle}>Hero Section</h1>
        <div className={styles.checklistHeadingContainer}>
          <p>Checklist (1/3)</p>
        </div>
        <div className={styles.tasks}>
          <Task></Task>
          <Task></Task>
          
        </div>
        <div className={styles.footer}>
          <p >Due Date</p><button> select date</button>
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default ShareCard;
