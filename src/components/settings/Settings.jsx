import React, { useState } from "react";
import styles from "./Settings.module.css";
import passwordIcon from "../../assets/icons/lock.png";
import eyeLogo from "../../assets/icons/eyeLogo.png";
import inputAccountIcon from "../../assets/icons/inputAccountIcon.png";
import { useNavigate } from "react-router";

function Settings() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <h1 className={styles.heading} >Settings</h1>
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

        <button id={styles.submit_button}>Update</button>
      </div>
    </div>
  );
}

export default Settings;
