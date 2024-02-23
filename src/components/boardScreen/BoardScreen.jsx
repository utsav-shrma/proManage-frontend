import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import styles from './BoardScreen.module.css'
import Board from '../board/Board'

function BoardScreen() {
  return (
    <div className={styles.main_container}>
        <Dashboard></Dashboard>
        <Board></Board>
        
    </div>
  )
}

export default BoardScreen