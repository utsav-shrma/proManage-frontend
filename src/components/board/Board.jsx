import React,{useState} from "react";
import styles from "./Board.module.css";
import Cards from "./card/Cards";
import { nameStorageKey } from "../../utils/constants";
import { taskStatus } from "../../utils/constants";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getFormattedDate } from "../../utils/utilityFunctions";

function Board() {
  const userName = localStorage.getItem(nameStorageKey);
  const [flag,setFlag]=useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <div>
          <h1 className={styles.welcome_message}>Welcome! {userName}</h1>
        </div>
        <div className={styles.curr_date}>{getFormattedDate()}</div>
      </div>
      <div className={styles.heading_container}>
        <div className={styles.board_heading}>Board</div>
        <div>
          <button className={styles.duration_button} onClick={()=>{setFlag(!flag)}}>This Week ^</button>
          {flag ? (
                ""
              ) : (
                <div className={styles.duration_value}>
                  <p>Today</p>
                  <p>This Week</p>
                  <p>This Month</p>
                </div>
              )}
        </div>
      </div>

      <div className={styles.cards_container}>
        {taskStatus.map((statusTypes, index) => {
          return <Cards key={index} title={statusTypes.title} ></Cards>;
        })}
      </div>
    </div>
  );
}

export default Board;
