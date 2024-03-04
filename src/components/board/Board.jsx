import React,{useState,useEffect} from "react";
import styles from "./Board.module.css";
import Cards from "./card/Cards";
import { nameStorageKey } from "../../utils/constants";
import { taskStatus } from "../../utils/constants";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getFormattedDate } from "../../utils/utilityFunctions";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { getAllCards } from "../../apis/cards";
import { MyContext } from "../../App";


function Board() {
  const userName = localStorage.getItem(nameStorageKey);
  const [flag,setFlag]=useState(true);
  const [duration,setDuration]=useState("This Week");
  const [cardData,setCardData]=useState([]);
  
  const getAllCardsData=async()=>{
    const response=await getAllCards();
    if(response){
      console.log(response);
     
      setCardData(response);
     }
  };
  useEffect(()=>{
    getAllCardsData();
    return () => {
      
    };
  },[]);
  return (
    
      <div className={styles.container}>
        <div className={styles.heading_container}>
          <h1 className={styles.welcome_message}>Welcome! {userName}</h1>
        </div>
        
      
      <div className={styles.curr_date}><h1>{getFormattedDate()}</h1></div>
      <div className={`${styles.heading_container} ${styles.board_heading_container}`}>
        <div className={styles.board_heading}>Board</div>
        <div className={styles.durationContainer}>
          <button className={styles.duration_button} 
          onClick={(event)=>{setFlag(!flag); event.stopPropagation();}}>
            {duration}  
          {flag?<KeyboardArrowDownRoundedIcon/>:<KeyboardArrowUpRoundedIcon/>}</button>
          {flag ? (
                ""
              ) : (
                <div className={styles.duration_value}>
                  <button onClick={(event)=>{event.stopPropagation(); setDuration("Today");}}>Today</button>
                  <button onClick={(event)=>{event.stopPropagation();setDuration("This Week");}} >This Week</button>
                  <button onClick={(event)=>{event.stopPropagation();setDuration("This Month");}} >This Month</button>
                </div>
              )}
        </div>
      </div>
      
      {/* <div className={styles.cardOverflowContainer}> */}
      <MyContext.Provider value={{ cardData,setCardData }}>
      <div className={styles.cards_container}>
        {taskStatus.map((statusTypes, index) => {
          
          return <Cards key={index}  title={statusTypes.title} cardData={cardData[statusTypes.status]} ></Cards>;
         
        })}
      </div>
      </MyContext.Provider>
      
      {/* </div> */}
    </div>
  );
}

export default Board;
