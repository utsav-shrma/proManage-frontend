import React from "react";
import styles from "./LoginForm.module.css";
import emailIcon from "../../assets/icons/icon.png";
import passwordIcon from "../../assets/icons/lock.png";
import eyeLogo from "../../assets/icons/eyeLogo.png";
function LoginForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <div>
        <form className={styles.login_form}>
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
              id="password"
              name="password"
              placeholder="Password"
            ></input>

            <img className={styles.icon} src={eyeLogo}></img>
          </div>

          <input
            id={styles.submit_button}
            type="submit"
            value="Login"
          ></input>
        </form>
      </div>
      <h1 className={styles.sub_heading}>Have no account yet?</h1>
      <button className={styles.register_button}>Register</button>
    </div>
  );
}

export default LoginForm;
