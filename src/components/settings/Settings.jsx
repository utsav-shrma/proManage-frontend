import React, { useState } from "react";
import styles from "./Settings.module.css";
import passwordIcon from "../../assets/icons/lock.png";
import eyeLogo from "../../assets/icons/eyeLogo.png";
import inputAccountIcon from "../../assets/icons/inputAccountIcon.png";
import { useNavigate } from "react-router";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Settings() {
  const [isHidden, setIsHidden] = useState(true);
  const notify = () => {
    
    toast.success("Updated Successful", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition:Bounce,
    });
  };

  const check = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <h1 className={styles.heading}>Settings</h1>
      </div>
      <div className={styles.register_form}>
        <div className={styles.form_input}>
          <img className={styles.icon} src={inputAccountIcon}></img>
          <input
            type="textarea"
            id="name"
            name="name"
            placeholder="Name"
          ></input>
        </div>

        <div className={styles.form_input}>
          <img className={styles.icon} src={passwordIcon}></img>
          <input
            className={styles.password_input}
            type={isHidden ? "password" : "text"}
            id="oldPassword"
            name="oldPassword"
            placeholder="Old Password"
          ></input>

          <img
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            className={styles.icon}
            src={eyeLogo}
          ></img>
        </div>

        <div className={styles.form_input}>
          <img className={styles.icon} src={passwordIcon}></img>
          <input
            className={styles.password_input}
            type={isHidden ? "password" : "text"}
            id="newPassword"
            name="newPassword"
            placeholder="New Password"
          ></input>

          <img
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            className={styles.icon}
            src={eyeLogo}
          ></img>
        </div>

        <button onClick={notify} id={styles.submit_button}>
          Update
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default Settings;
