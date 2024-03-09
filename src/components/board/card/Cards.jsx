import React,{useState} from 'react'
import styles from './Cards.module.css'
import collapseIcon from '../../../assets/icons/collapseIcon.png'
import TaskCard from '../taskCard/TaskCard'
import { useSelector, useDispatch } from "react-redux";
import EditCreatePopup from '../../editCreatePopup/EditCreatePopup';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
function Cards({title,cardData=[],getAllCardsData}) {
  const [globalCollapse,setGlobalCollapse] = useState(true);
  // console.log(title ,cardData);
  const [createPopup,setCreatePopup]=useState(false);
  return (
    <div className={styles.container}>
      {createPopup ? (
        <EditCreatePopup
          
          setShowEditView={setCreatePopup}

        ></EditCreatePopup>
      ) : (
        ""
      )}
        <div className={styles.title}>
            <h1>{title}</h1>
            <div className={styles.buttonContainer}>
            {title==="To Do"?<button className={styles.addButton} onClick={()=>{setCreatePopup(true)}}> <AddRoundedIcon></AddRoundedIcon> </button>:""}
            <button onClick={()=>{setGlobalCollapse(!globalCollapse); }} className={styles.globalCollapse}>
            <img src={collapseIcon}></img>
            </button>
            </div>
           
            
        </div>
        <div className={styles.overflow_container}> 
{/* // overflow to a task (flex) conatiner was causing child components to stretch and passing below the parent 
so by wrapping it by another div and setting it to overflow solved the problem beacuse using flex the height of the container was changing
but the the scroll length was not changing accordingly and  the child is passing over the parent */}
        
        <div className={styles.task_container}>
          {
            cardData.map((taskData,index)=>{
              return(<TaskCard key={index} cardIndex={index}  globalCollapse={globalCollapse} taskData={taskData} getAllCardsData={getAllCardsData}/>);
              
            })
          }
          
            
        </div>
        </div>
        
    </div>
  )
}

export default Cards