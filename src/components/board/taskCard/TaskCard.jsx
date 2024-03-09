import React, { useState, useEffect } from "react";
import styles from "./TaskCard.module.css";
import Task from "../task/Task";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { priorityColorMap } from "../../../utils/constants";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { updateStatus } from "../../../apis/cards";
import { useContext } from "react";
import { MyContext } from "../../../App";
import { useSelector, useDispatch } from "react-redux";
import EditCreatePopup from "../../editCreatePopup/EditCreatePopup";
import ConfirmationPopup from "../../confirmationPopup/ConfirmationPopup";
import { shareCard } from "../../../apis/cards";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkTask } from "../../../apis/cards";
import dayjs from "dayjs";
import { setReloadGlobalState } from "../../../redux/slice/utility";
import { deleteCard } from "../../../apis/cards";

function TaskCard({ globalCollapse, taskData, cardIndex, getAllCardsData }) {
  const [editPopup, setEditPopup] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  let status = taskData.status;
  const { cardData, setCardData } = useContext(MyContext);
  const dispatch = useDispatch();
  const [showEditView,setShowEditView]=useState(false);
  let [deletePopup,setDeletePopup]=useState(false);
  let dueDate=dayjs(taskData.dueDate);
  let currDate=dayjs();
  let dateButtonColor="";
  let fontColor="#5a5a5a";
  if(taskData.status==="done"){
    dateButtonColor="#63C05B";
    fontColor="white";
  }
  else if(dueDate.isBefore(currDate)){
      dateButtonColor="#CF3636";
      fontColor="white";
    }
  


  const notifySuccess = () => {
    toast.success(`Link Copied To Clipboard`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const shareCardbyId = async () => {
    let response = await shareCard(taskData._id);
    if (response) {
      console.log(response);
      let text = window.location.href + `card/${taskData._id}`;
      console.log(text);
      navigator.clipboard.writeText(text);
      notifySuccess();
    }
  };

  const updateCardStatus = (updatedStatus) => {
    let response = updateStatus(taskData._id, updatedStatus);
    if (response) {
      console.log(response);
    }
    getAllCardsData();
  };

  useEffect(() => {
    setIsCollapsed(false);
  }, [globalCollapse]);

  const handleDelete=async ()=>{
    let response = await deleteCard(taskData._id);
    if(response){
      console.log(response);
      setDeletePopup(false);
      dispatch(setReloadGlobalState());

    }

  }

  

  return (
    <div
      className={styles.container}
      onClick={(event) => {
        setEditPopup(true);
        event.stopPropagation();
      }}
    >
      <ToastContainer></ToastContainer>
      {showEditView ? (
        <EditCreatePopup
          cardData={taskData}
          setShowEditView={setShowEditView}

        ></EditCreatePopup>
      ) : (
        ""
      )}
      {deletePopup ? (
        <ConfirmationPopup
          isLogoutOrDelete={false}
          handleSubmit={handleDelete}
          close={() => {
            setDeletePopup(false);
          }}
          
        ></ConfirmationPopup>
      ) : (
        ""
      )}
      <div className={styles.priority_container}>
        <div className={styles.priority}>
          <span style={{ color: priorityColorMap[taskData.priority] }}>●</span>
          <p>
            {taskData.priority.charAt(0).toUpperCase() +
              taskData.priority.slice(1)}{" "}
            Priority
          </p>
        </div>

        <div className={styles.editPopup}>
          <button
            className={styles.collapseButton}
            onClick={(event) => {
              setEditPopup(!editPopup);
              event.stopPropagation();
            }}
          >
            <MoreHorizRoundedIcon />
          </button>
          {editPopup ? (
            ""
          ) : (
            <div className={styles.duration_value}>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  setShowEditView(true);
                  setEditPopup(true);
                }}
              >
                Edit
              </button>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  shareCardbyId();
                  setEditPopup(true);
                }}
              >
                Share
              </button>
              <button
                style={{ color: "red" }}
                onClick={(event) => {
                  event.stopPropagation();
                  setDeletePopup(true);
                  setEditPopup(true);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <h1 className={styles.taskTitle}>{taskData.title}</h1>
      <div className={styles.checklistHeadingContainer}>
        <p>
          Checklist (
          {taskData.tasks.filter((task) => task.isChecked === true).length}/
          {taskData.tasks.length})
        </p>

        {!isCollapsed ? (
          <button
            className={styles.taskCollapseButton}
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            <KeyboardArrowDownRoundedIcon sx={{ color: "grey" }} />
          </button>
        ) : (
          <button
            className={styles.taskCollapseButton}
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            <KeyboardArrowUpRoundedIcon sx={{ color: "grey" }} />
          </button>
        )}
      </div>

      {isCollapsed ? (
        <div className={styles.tasks}>
          {taskData.tasks.map((data, index) => {
            const handleCheckChange = async () => {
              let currCheckData =
                cardData[taskData.status][cardIndex].tasks[index].isChecked;

              let response = await checkTask(data._id, !currCheckData);
              if (response) {
                setCardData((cardData) => {
                  const updatedCardData = { ...cardData }; // Make a shallow copy of the state
                  updatedCardData[taskData.status][cardIndex].tasks[index].isChecked = !currCheckData;
                  console.log("update card");
                  return updatedCardData;
                });
              }
            };
            return (
              <Task
                data={data}
                handleCheckChange={handleCheckChange}
                key={index}
                taskIndex={index}
                cardIndex={cardIndex}
                currStatus={taskData.status}
              ></Task>
            );
          })}
        </div>
      ) : (
        ""
      )}

      <div className={styles.footer}>
        <button style={{background:dateButtonColor,color:fontColor}}> {taskData.dueDate ? `${dueDate.date()}/${dueDate.month() + 1}/${dueDate.year()}` : "select date"}</button>
        <div className={styles.footerInside}>
          {status != "backlog" ? (
            <button
              onClick={() => {
                updateCardStatus("backlog");
              }}
            >
              {" "}
              backlog
            </button>
          ) : (
            ""
          )}
          {status != "toDo" ? (
            <button
              onClick={() => {
                updateCardStatus("toDo");
              }}
            >
              {" "}
              toDo
            </button>
          ) : (
            ""
          )}
          {status != "done" ? (
            <button
              onClick={() => {
                updateCardStatus("done");
              }}
            >
              {" "}
              done
            </button>
          ) : (
            ""
          )}
          {status != "inProgress" ? (
            <button
              onClick={() => {
                updateCardStatus("inProgress");
              }}
            >
              {" "}
              inProgress
            </button>
          ) : (
            ""
          )}
          {/* <button>done </button> */}
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
