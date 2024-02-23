import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import styles from './SettingsScreen.module.css'
import Settings from '../settings/Settings'
function SettingsScreen() {
  return (
    <div className={styles.main_container}>
        <Dashboard></Dashboard>
        <Settings></Settings>
    </div>
  )
}

export default SettingsScreen