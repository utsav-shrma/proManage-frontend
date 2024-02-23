import React from 'react'
import styles from './AnalyticsScreen.module.css'
import Analytics from '../analytics/Analytics'
import Dashboard from '../dashboard/Dashboard'
function AnalyticsScreen() {
  return (
    <div className={styles.main_container}>
        <Dashboard></Dashboard>
        <Analytics></Analytics>
    </div>
  )
}

export default AnalyticsScreen