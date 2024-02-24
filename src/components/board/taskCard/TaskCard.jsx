import React from 'react'
import styles from './TaskCard.module.css'
import Task from '../task/Task'

function TaskCard() {
  return (
    <div className={styles.container}>
        <div className={styles.priority_container}>
            <div>prioroty</div>
            <div>...</div>
        </div>
        <h1>Title</h1>
        <div className={styles.checklist_heading}>
            <p>Checklist (1/3)</p>
            <div> ^</div>
            
        </div>
        <div className={styles.tasks}> <Task></Task>
        <Task></Task></div>
        <div className={styles.footer}>
            <button> select date</button>
            <div>
                {/*add a check to not show current status button */}
                <button> backlog</button>
                <button>to do</button>
                <button>in progress</button>
                <button>done </button>
            </div>
        </div>

    </div>
  )
}

export default TaskCard