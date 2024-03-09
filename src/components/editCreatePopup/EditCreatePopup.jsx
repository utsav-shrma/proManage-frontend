import React, { useState, useEffect } from "react";
import styles from "./EditCreatePopup.module.css";
import Task from "../board/task/Task";
import { priorityColorMap } from "../../utils/constants";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DatePicker from "../pickDate/DatePicker";
import { useSelector, useDispatch } from "react-redux";
import { setShowEditView } from "../../redux/slice/utility";
import dayjs from "dayjs";
import { createCard,updateCard } from "../../apis/cards";
import { setReloadGlobalState } from "../../redux/slice/utility";

function EditCreatePopup({ cardData, cardIndex }) {
  const [form, setForm] = useState({
    priority: "",
    title: "",
    tasks: [],
    dueDate: "",
  });
  const [pickDate, setPickDate] = useState(false);
  const [calenderDate, setCalenderDate] = useState();
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState([{ isChecked: false, task: "" }]);

  
  // const [shallowCopy,setShallowCopy]=useState(cardData); //shallow copy on editin this actually effects the cardData (parent state) using setShallow copy

  useEffect(() => {
    let deepCopy=JSON.parse(JSON.stringify(cardData));
    setForm(deepCopy);
    setCalenderDate(deepCopy.dueDate ? dayjs(deepCopy.dueDate) : null);
  }, []);

  const handlePriorityChange = (event) => {
    const newForm = { ...form };
    newForm.priority = event.target.id;
    setForm(newForm);
  };

  useEffect(() => {
    setForm((form) => {
      form.dueDate = calenderDate;
      return form;
    });
  }, [calenderDate]);

  const updateApi = async(newCard)=>{
    let response=await updateCard(newCard);
    if(response){
        console.log(response);
        dispatch(setShowEditView());
    }
  }

  const createApi = async(newCard)=>{
    let response=await createCard(newCard);
    if(response){
        console.log(response);
        dispatch(setShowEditView());
    }
  }

  const handleSubmit=()=>{

    const nonEmptyStrings = newTask.filter(t => t.task !== "");
    let newCard={...form};
    newCard.tasks=[...newCard.tasks,...nonEmptyStrings];
    // console.log(newCard);

    if(cardData){
      //call update api
      updateApi(newCard);
      

    }
    else{
      
      //call create api
      createApi(newCard);
    }

    dispatch(setReloadGlobalState());
  }

  return (
    <div className={styles.temp}>
      {pickDate ? (
        <DatePicker
          pickDate={pickDate}
          setPickDate={setPickDate}
          calenderDate={calenderDate}
          setCalenderDate={setCalenderDate}
        ></DatePicker>
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
              value={form.title}
              onChange={(event) => {
                const newForm = { ...form }; // Make a shallow copy of the state
                newForm.title = event.target.value;
                setForm(newForm);
              }}
            ></input>
          </div>

          <div className={styles.priorityContainer}>
            <p className={styles.title}>
              Select Priority <span className={styles.redstar}>*</span>
            </p>
            <div className={styles.priorityButtonContainer}>
              <button
                id="high"
                onClick={handlePriorityChange}
                className={styles.priorityButton}
                style={{
                  background: form.priority === "high" ? "#d5d7db" : "",
                }}
              >
                <span
                  className={styles.colorDot}
                  style={{ color: priorityColorMap["high"] }}
                >
                  ●
                </span>
                HIGH PRIORITY
              </button>
              <button
                id="medium"
                onClick={handlePriorityChange}
                className={styles.priorityButton}
                style={{
                  background: form.priority === "medium" ? "#d5d7db" : "",
                }}
              >
                <span
                  className={styles.colorDot}
                  style={{ color: priorityColorMap["medium"] }}
                >
                  ●
                </span>
                MODERATE PRIORITY
              </button>
              <button
                id="low"
                onClick={handlePriorityChange}
                className={styles.priorityButton}
                style={{ background: form.priority === "low" ? "#d5d7db" : "" }}
              >
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
            Checklist (
            {form.tasks.filter((task) => task.isChecked === true).length}/
            {form.tasks.length}) <span className={styles.redstar}>*</span>
          </p>
          <div className={styles.checklistContainer}>
            {/* //loop here */}
            <div className={styles.task}>
              {form.tasks.map((data, index) => {
                const handleCheckChange = () => {
                  //this piece of is running twice automatically (the hof function written is running twice why?)
                  // setForm((form) => {
                  //   const newForm = { ...form }; // Make a shallow copy of the state
                  //   newForm.tasks[index].isChecked = !form.tasks[index].isChecked;
                  //   console.log("set form");
                  //   return newForm;
                  // });

                  const newForm = { ...form }; // Make a shallow copy of the state
                  newForm.tasks[index].isChecked = !form.tasks[index].isChecked;

                  setForm(newForm);

                };
                const handleTaskChange = (event) => {
                  const newForm = { ...form }; // Make a shallow copy of the state
                  newForm.tasks[index].task = event.target.value;
                  setForm(newForm);
                };

                const onDelete = () => {
                  const newForm = { ...form }; // Make a shallow copy of the state
                  newForm.tasks.splice(index, 1);
                  setForm(newForm);
                };

                return (
                  <Task
                    data={data}
                    key={index}
                    isPopupView={true}
                    handleCheckChange={handleCheckChange}
                    handleTaskChange={handleTaskChange}
                    onDelete={onDelete}
                  ></Task>
                );
              })}

              {newTask.map((data, index) => {
                const handleCheckChange = () => {
                 
                  const temp = [...newTask ]; // Make a shallow copy of the state
                  temp[index].isChecked = !newTask[index].isChecked;

                  setNewTask(temp);

                };
                const handleTaskChange = (event) => {
                  const temp = [ ...newTask ]; // Make a shallow copy of the state
                  temp[index].task = event.target.value;

                  setNewTask(temp);
                };

                const onDelete = () => {
                  const temp = [ ...newTask ]; // Make a shallow copy of the state
                  temp.splice(index, 1);
                  setNewTask(temp);
                };

                return (
                  <Task
                    data={data}
                    key={index}
                    handleTaskChange={handleTaskChange}
                    handleCheckChange={handleCheckChange}
                    onDelete={onDelete}
                    isPopupView={true}
                  ></Task>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => {
              let temp = [...newTask];
              temp.push({ isChecked: false, task: "" });
              
              setNewTask(temp);

            }}
            className={styles.addButton}
          >
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
            {calenderDate
              ? `${calenderDate.date()}/${
                  calenderDate.month() + 1
                }/${calenderDate.year()}`
              : "Select Due Date"}
          </button>

          <div className={styles.submitContainer}>
            <button
              onClick={() => {
                dispatch(setShowEditView());
              }}
              className={styles.cancel}
            >
              {" "}
              Cancel
            </button>
            <button onClick={handleSubmit} className={styles.submit}> Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCreatePopup;
