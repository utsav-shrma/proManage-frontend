import React,{useState} from "react";
import styles from "./Board.module.css";
import Cards from "./card/Cards";
import { nameStorageKey } from "../../utils/constants";
import { taskStatus } from "../../utils/constants";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getFormattedDate } from "../../utils/utilityFunctions";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { HideImage } from "@mui/icons-material";

function Board() {
  const userName = localStorage.getItem(nameStorageKey);
  const [flag,setFlag]=useState(true);
  return (
    
      <div className={styles.container}>
        <div className={styles.heading_container}>
          <h1 className={styles.welcome_message}>Welcome! {userName}</h1>
        </div>
        
      
      <div className={styles.curr_date}><h1>{getFormattedDate()}</h1></div>
      <div className={`${styles.heading_container} ${styles.board_heading_container}`}>
        <div className={styles.board_heading}>Board</div>
        <div>
          <button className={styles.duration_button} onClick={(event)=>{setFlag(!flag); event.stopPropagation();}}>This Week  {flag?<KeyboardArrowDownRoundedIcon/>:<KeyboardArrowUpRoundedIcon/>}</button>
          {flag ? (
                ""
              ) : (
                <div className={styles.duration_value}>
                  <button onClick={(event)=>{event.stopPropagation();}}>Today</button>
                  <button onClick={(event)=>{event.stopPropagation();}} >This Week</button>
                  <button onClick={(event)=>{event.stopPropagation();}} >This Month</button>
                </div>
              )}
        </div>
      </div>
      
      {/* <div className={styles.cardOverflowContainer}> */}
      <div className={styles.cards_container}>
        {taskStatus.map((statusTypes, index) => {
          return <Cards key={index} title={statusTypes.title} ></Cards>;
        })}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Board;
