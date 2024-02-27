import React from "react";
import styles from "./EditCreatePopup.module.css";
import Task from "../board/task/Task";
import { priorityColorMap } from "../../utils/constants";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function EditCreatePopup() {
  return (
    <div className={styles.temp}>
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
              <Task isPopupView={true} ></Task>
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
          <button className={styles.dueDate}> Select Due Date</button>
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
