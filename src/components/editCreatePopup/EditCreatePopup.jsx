import React, { useState } from "react";
import styles from "./EditCreatePopup.module.css";
import Task from "../board/task/Task";
import { priorityColorMap } from "../../utils/constants";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';

function EditCreatePopup() {
 const currDate= new Date(); 
  const [pickDate, setPickDate] = useState();
  const [calenderdate, setcalenderdate] = useState();
  const handleDateChange = (date) => {
    setcalenderdate(date);
    setPickDate(false);
    
  };
  return (
    <div className={styles.temp}>
      {pickDate ? (
        <div className={styles.calenderContainer}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
            slotProps={{
                actionBar: {
                  actions: ['clear','today']
                }
              }}
            defaultValue={dayjs()}
            value={calenderdate ?? dayjs()}
            disablePast={true}
            onChange={handleDateChange}
            disabled={false}
            closeOnSelect={true}
              sx={{ padding: "0", boxShadow: "0px 2px 12px 0px #82698c33" }}
            />
          </LocalizationProvider>
        </div>
      ) : (
        ""
      )}
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
            Checklist(1/3) <span className={styles.redstar}>*</span>
          </p>
          <div className={styles.checklistContainer}>
            {/* //loop here */}
            <div className={styles.task}>
              <Task isPopupView={true}></Task>
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
              setPickDate(!pickDate);
            }}
          >
            {calenderdate?`${calenderdate.day()}/${calenderdate.month()}/${calenderdate.year()}`:"select date"}
            
          </button>

          <div className={styles.submitContainer}>
            <button className={styles.cancel}> Cancel</button>
            <button className={styles.submit}> Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCreatePopup;
