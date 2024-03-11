import React,{useState,useEffect} from "react";
import styles from "./Board.module.css";
import Cards from "./card/Cards";
import { nameStorageKey } from "../../utils/constants";
import { taskStatus } from "../../utils/constants";
import { getFormattedDate } from "../../utils/utilityFunctions";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { getAllCards } from "../../apis/cards";
import { MyContext } from "../../App";
import { useSelector, useDispatch } from "react-redux";
import { setReloadGlobalState } from "../../redux/slice/utility";


function Board() {
  const userName = localStorage.getItem(nameStorageKey);
  const [flag,setFlag]=useState(true);
  const [duration,setDuration]=useState(null);
  const [cardData,setCardData]=useState([]);
  const dispatch = useDispatch();
  let reloadGlobalState = useSelector((state) => state.utility.reloadGlobalState);
  
  const getAllCardsData=async()=>{
    let response=await getAllCards(duration);
    if(response){
      console.log(response);
     
      setCardData(response);
     }
  };
  useEffect(()=>{
    getAllCardsData();
    return () => {
      
    };
  },[reloadGlobalState,duration]);
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
            {duration?(duration==="today"?"Today":"This Month"):"This Week"}  
          {flag?<KeyboardArrowDownRoundedIcon/>:<KeyboardArrowUpRoundedIcon/>}</button>
          {flag ? (
                ""
              ) : (
                <div className={styles.duration_value}>
                  <button onClick={(event)=>{event.stopPropagation(); setDuration("today"); setFlag(true);}}>Today</button>
                  <button onClick={(event)=>{event.stopPropagation();setDuration(""); setFlag(true);}} >This Week</button>
                  <button onClick={(event)=>{event.stopPropagation();setDuration("lastMonth"); setFlag(true);}} >This Month</button>
                </div>
              )}
        </div>
      </div>
      
      {/* <div className={styles.cardOverflowContainer}> */}
      <MyContext.Provider value={{ cardData,setCardData }}>
      <div className={styles.cards_container}>
        {taskStatus.map((statusTypes, index) => {
          
          return <Cards key={index} title={statusTypes.title} cardData={cardData[statusTypes.status] } getAllCardsData={getAllCardsData} ></Cards>;
         
        })}
      </div>
      </MyContext.Provider>
      
      {/* </div> */}
    </div>
  );
}

export default Board;
