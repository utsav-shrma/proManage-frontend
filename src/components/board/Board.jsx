import React from "react";
import styles from "./Board.module.css";
import Cards from "./card/Cards";
import { nameStorageKey } from "../../utils/constants";
import { taskStatus } from "../../utils/constants";

const getOrdinalSuffix = (number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = number % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
};

const getFormattedDate = () => {
  const currentDate = new Date();
  // Get numeric day and its ordinal suffix
  const numericDay = currentDate.getDate();
  const dayWithOrdinal = `${numericDay}${getOrdinalSuffix(numericDay)}`;

  // Get month and year
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();

  // Formatted date string
  const formattedDate = `${dayWithOrdinal} ${month} ${year}`;

  return formattedDate;
};

function Board() {
  const userName = localStorage.getItem(nameStorageKey);

  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <div>
          <h1 className={styles.welcome_message}>Welcome! {userName}</h1>
        </div>
        <div className={styles.curr_date} >{getFormattedDate()}</div>
      </div>
      <div className={styles.heading_container}>
        <div className={styles.board_heading}>Board</div>
        <div>collapse menu ^</div>
      </div>

      <div className={styles.cards_container}>
    
        {taskStatus.map((statusTypes,index)=>{
            return <Cards key={index} title={statusTypes.title}></Cards>
        })}
      </div>
    </div>
  );
}

export default Board;
