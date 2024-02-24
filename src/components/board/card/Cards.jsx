import React from 'react'
import styles from './Cards.module.css'
import collapseIcon from '../../../assets/icons/collapseIcon.png'
import TaskCard from '../taskCard/TaskCard'
function Cards({title}) {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>{title}</h1>
            <img src={collapseIcon}></img>
        </div>
        <div className={styles.overflow_container}> 
{/* // overflow to a task (flex) conatiner was causing child components to stretch and passing below the parent 
so by wrapping it by another div and setting it to overflow solved the problem */}
        <div className={styles.task_container}>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </div>
        </div>
        
    </div>
  )
}

export default Cards