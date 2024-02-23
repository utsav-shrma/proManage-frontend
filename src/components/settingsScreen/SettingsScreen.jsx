import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import styles from './SettingsScreen.module.css'
function SettingsScreen() {
  return (
    <div className={styles.main_container}>
        <Dashboard></Dashboard>
        <>Settings</>
    </div>
  )
}

export default SettingsScreen