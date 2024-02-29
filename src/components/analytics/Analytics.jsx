import React,{useState,useEffect} from "react";
import styles from "./Analytics.module.css";
import AnalyticsCard from "./analyticsCards/AnalyticsCard";
import {analyticsCard1Titles,analyticsCard2Titles} from "../../utils/constants";

import { getAnalytics } from "../../apis/cards";

function Analytics() {

  const[analyticsData,setAnalyticsData]=useState({});
const getAnalyticsData=async ()=>{
  const response=await getAnalytics();
    if(response){
      console.log(response);
      setAnalyticsData(response);
     }
    };
  useEffect(()=>{
    getAnalyticsData();
    return () => {
      
    };
  },[]);
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Analytics</h1>
      </div>
      <div className={styles.cards_container}>
        <div className={styles.cards}>
          {analyticsCard1Titles.map((data, index) => {
            return <AnalyticsCard key={index}title={data.title} value={analyticsData[data.key]}></AnalyticsCard>;
          })}
        </div>
        <div className={styles.cards}>
        {analyticsCard2Titles.map((data, index) => {
            return <AnalyticsCard key={index} title={data.title} value={analyticsData[data.key]}></AnalyticsCard>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
