import React from "react";
import styles from "./RegisterForm.module.css";
import emailIcon from "../../assets/icons/icon.png";
import passwordIcon from "../../assets/icons/lock.png";
import eyeLogo from "../../assets/icons/eyeLogo.png";
import inputAccountIcon from "../../assets/icons/inputAccountIcon.png";
import { useNavigate } from "react-router";

function RegisterForm() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Register</h1>
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
          <img className={styles.icon} src={emailIcon}></img>
          <input
            type="textarea"
            id="email"
            name="email"
            placeholder="Email"
          ></input>
        </div>

        <div className={styles.form_input}>
          <img className={styles.icon} src={passwordIcon}></img>
          <input
            className={styles.password_input}
            type="textarea"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
          ></input>

          <img className={styles.icon} src={eyeLogo}></img>
        </div>

        <div className={styles.form_input}>
          <img className={styles.icon} src={passwordIcon}></img>
          <input
            className={styles.password_input}
            type="textarea"
            id="password"
            name="password"
            placeholder="Password"
          ></input>

          <img className={styles.icon} src={eyeLogo}></img>
        </div>

        <button id={styles.submit_button}>Register</button>
      </div>

      <h1 className={styles.sub_heading}>Have an account?</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
        className={styles.login_button}
      >
        Log in
      </button>
    </div>
  );
}

export default RegisterForm;
