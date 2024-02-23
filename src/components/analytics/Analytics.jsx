import React from "react";
import styles from "./Analytics.module.css";
import AnalyticsCard from "./analyticsCards/AnalyticsCard";
import {analyticsCard1Titles,analyticsCard2Titles} from "../../utils/constants";

function Analytics() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Analytics</h1>
      </div>
      <div className={styles.cards_container}>
        <div className={styles.cards}>
          {analyticsCard1Titles.map((data, index) => {
            return <AnalyticsCard key={index}title={data.title} value={1}></AnalyticsCard>;
          })}
        </div>
        <div className={styles.cards}>
        {analyticsCard2Titles.map((data, index) => {
            return <AnalyticsCard key={index} title={data.title} value={1}></AnalyticsCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
