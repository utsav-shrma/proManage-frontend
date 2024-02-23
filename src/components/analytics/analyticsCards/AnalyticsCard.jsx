import React from 'react'
import styles from "./AnalyticsCard.module.css"
function AnalyticsCard({title,value}) {
  return (
    <div className={styles.container}>
        <div className={styles.sub_container} >
            <span >●</span>
            <p>{title}</p>
        </div>
        <p className={styles.value}>{value}</p>
    </div>
  )
}

export default AnalyticsCard