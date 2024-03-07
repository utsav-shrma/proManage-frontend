import React, { useState, useEffect } from "react";
import styles from "./ShareCard.module.css";
import logo from "../../assets/icons/codesandbox.png";
import Task from "../board/task/Task";
import { useParams } from "react-router-dom";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { priorityColorMap } from "../../utils/constants";
import { getCardByID } from "../../apis/cards";
function ShareCard() {
  const params = useParams();
  const cardId = params.cardId;
  const [cardData, setCardData] = useState();

  const findCard = async () => {
    let response = await getCardByID(cardId);
    if (response) {
      setCardData(response);
    }
  };

  useEffect(() => {
    console.log(cardId);
    findCard();
    console.log(cardData);
  }, []);

  return (
    <div className={styles.mainContainer}>
      {cardData ? (
        <div>
          <div className={styles.logoContainer}>
            <div className={styles.tab_container}>
              <img className={styles.logo_image} src={logo}></img>
              <h1 className={styles.logo_heading}>Pro Manage</h1>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.container}>
              <div className={styles.priority_container}>
                <div className={styles.priority}>
                  <span style={{ color: priorityColorMap[cardData.priority] }}>
                    ●
                  </span>
                  <p>
                    {cardData.priority.charAt(0).toUpperCase() +
                      cardData.priority.slice(1)}{" "}
                    Priority
                  </p>
                </div>
              </div>
              <h1 className={styles.taskTitle}>{cardData.title}</h1>
              <div className={styles.checklistHeadingContainer}>
                <p>
                  Checklist (
                  {
                    cardData.tasks.filter((task) => task.isChecked === true)
                      .length
                  }
                  /{cardData.tasks.length})
                </p>
              </div>
              <div className={styles.tasks}>
                {cardData.tasks.map((data,index) => {
                  return <div className={styles.taskContainer} key={index}>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    id="topping"
                    name="topping"
                    
                    onChange={()=>{}}
                    checked={data.isChecked ? "checked" : ""}
                  ></input>
                  <TextareaAutosize
                  
                    className={styles.textarea}
                    value={data.task}
                  />

                </div>;
                })}
              </div>
              <div className={styles.footer}>
                <p>Due Date</p>
                <button> select date</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShareCard;
