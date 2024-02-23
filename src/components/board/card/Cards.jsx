import React from 'react'
import styles from './Cards.module.css'
import collapseIcon from '../../../assets/icons/collapseIcon.png'
function Cards({title}) {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>{title}</h1>
            <img src={collapseIcon}></img>
        </div>
        <div className={styles.task_container}>
            Component Here
        </div>
    </div>
  )
}

export default Cards