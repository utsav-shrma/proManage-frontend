import React from 'react'
import styles from './TaskCard.module.css'
import Task from '../task/Task'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { grey } from '@mui/material/colors';
function TaskCard() {
  return (
    <div className={styles.container}>
        <div className={styles.priority_container}>
            <div className={styles.priority}> High Priority</div>
            <button className={styles.collapseButton}><MoreHorizRoundedIcon/></button>
        </div>
        <h1 className={styles.taskTitle}>Hero Section</h1>
        <div className={styles.checklistHeadingContainer}>
            <p>Checklist (1/3)</p>
            <div className={styles.taskCollapseButton}> <KeyboardArrowDownRoundedIcon sx={{ color: "grey" }}/></div>
            
        </div>
        <div className={styles.tasks}> <Task></Task>
        <Task></Task></div>
        <div className={styles.footer}>
            <button> select date</button>
            <div className={styles.footerInside}>
                {/*add a check to not show current status button */}
                <button> backlog</button>
                <button>to do</button>
                <button>in progress</button>
                {/* <button>done </button> */}
            </div>
        </div>

    </div>
  )
}

export default TaskCard