import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import emailIcon from "../../assets/icons/icon.png";
import passwordIcon from "../../assets/icons/lock.png";
import eyeLogo from "../../assets/icons/eyeLogo.png";
import { useNavigate } from "react-router";
import { loginUser } from "../../apis/auth";

function LoginForm() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isHidden, setIsHidden] = useState(true);
  const [errorFlag, setErrorFlag] = useState(false);
  const navigate = useNavigate();

  const handleSubmit=async (event)=>{
      event.preventDefault(); //to prevent reload
      const response=await loginUser({...credentials});
      if(response){
        console.log(response);
        localStorage.setItem("token", response.jwt);
        localStorage.setItem("userName", response.name);
        navigate("/");}
      
      setErrorFlag(true);
  }

  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Login</h1>
      <div className={styles.login_form}>
        <div className={styles.form_input}>
          <img className={styles.icon} src={emailIcon}></img>
          <input
            type="textarea"
            id="email"
            name="email"
            placeholder="Email"
            onChange={onChangeHandler}
            value={credentials.email}
          ></input>
        </div>
        <div className={styles.form_input}>
          <img className={styles.icon} src={passwordIcon}></img>
          <input
            className={styles.password_input}
            type={isHidden ? "password" : "text"}
            id="password"
            name="password"
            onChange={onChangeHandler}
            value={credentials.password}
            placeholder="Password"
          ></input>

          <img
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            className={styles.icon}
            src={eyeLogo}
          ></img>
        </div>
        <div className={styles.errorMessage}>
        {errorFlag ? (
          
            <p className={styles.error}>Invalid Credentials</p>
         
        ) : (
          ""
        )} </div>

        <button onClick={handleSubmit}id={styles.submit_button}>Login</button>
      </div>
      <h1 className={styles.sub_heading}>Have no account yet?</h1>
      <button
        onClick={() => {
          navigate("/register");
        }}
        className={styles.register_button}
      >
        Register
      </button>
    </div>
  );
}

export default LoginForm;
