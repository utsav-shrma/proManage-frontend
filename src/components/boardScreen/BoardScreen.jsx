import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import styles from './BoardScreen.module.css'

function BoardScreen() {
  return (
    <div className={styles.main_container}>
        <Dashboard></Dashboard>
        <>Board</>
        
    </div>
  )
}

export default BoardScreen