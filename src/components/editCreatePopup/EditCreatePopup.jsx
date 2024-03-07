import React, { useState } from "react";
import styles from "./EditCreatePopup.module.css";
import Task from "../board/task/Task";
import { priorityColorMap } from "../../utils/constants";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DatePicker from "../pickDate/DatePicker";
import { useSelector, useDispatch } from 'react-redux'
import { setShowEditView } from "../../redux/slice/utility";

function EditCreatePopup({cardData,cardIndex}) {
 
  const [pickDate, setPickDate] = useState(false);
  const [calenderDate, setCalenderDate]=useState();
  const dispatch = useDispatch();
 
  return (
    <div className={styles.temp}>
        
      {pickDate?<DatePicker 
        pickDate={pickDate} 
        setPickDate={setPickDate}
        calenderDate={calenderDate}
        setCalenderDate={setCalenderDate}
        
         ></DatePicker>:""}


    

      <div className={styles.popup}>
        <div className={styles.header}>
          <p className={styles.title}>
            Title <span className={styles.redstar}>*</span>
          </p>
          <div className={styles.test}>
            <input
              className={styles.titleInput}
              placeholder="Enter Task Title"
              type="textarea"
              value={cardData.title}
            ></input>
          </div>

          <div className={styles.priorityContainer}>
            <p className={styles.title}>
              Select Priority <span className={styles.redstar}>*</span>
            </p>
            <div className={styles.priorityButtonContainer}>
              <button className={styles.priorityButton}>
                <span
                  className={styles.colorDot}
                  style={{ color: priorityColorMap["high"] }}
                >
                  ●
                </span>
                HIGH PRIORITY
              </button>
              <button className={styles.priorityButton}>
                <span
                  className={styles.colorDot}
                  style={{ color: priorityColorMap["medium"] }}
                >
                  ●
                </span>
                MODERATE PRIORITY
              </button>
              <button className={styles.priorityButton}>
                <span
                  className={styles.colorDot}
                  style={{ color: priorityColorMap["low"] }}
                >
                  ●
                </span>
                LOW PRIORITY
              </button>
            </div>
          </div>

          <p className={styles.title}>
          Checklist ({cardData.tasks.filter((task)=>task.isChecked===true).length}/{cardData.tasks.length}) <span className={styles.redstar}>*</span>
          </p>
          <div className={styles.checklistContainer}>
            {/* //loop here */}
            <div className={styles.task}>
            {cardData.tasks.map((data,index)=>{
          return <Task data={data}  key={index} isPopupView={true} taskIndex={index} cardIndex={cardIndex} currStatus={cardData.status}></Task>;
        })}
            </div>
          </div>

          <button className={styles.addButton}>
            <AddRoundedIcon
              sx={{ fontSize: 22, paddingBottom: "2px" }}
            ></AddRoundedIcon>
            <p>Add New</p>
          </button>
        </div>
        <div className={styles.footer}>
          <button
            className={styles.dueDate}
            onClick={() => {
              setPickDate(true);
            }}
          >
            {calenderDate?`${calenderDate.date()}/${calenderDate.month()+1}/${calenderDate.year()}`:"Select Due Date"}
            
          </button>

          <div className={styles.submitContainer}>
            <button onClick={()=>{dispatch(setShowEditView());}} className={styles.cancel}> Cancel</button>
            <button className={styles.submit}> Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCreatePopup;
