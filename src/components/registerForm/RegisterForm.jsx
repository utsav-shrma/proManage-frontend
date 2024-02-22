import React,{useState} from "react";
import styles from "./RegisterForm.module.css";
import emailIcon from "../../assets/icons/icon.png";
import passwordIcon from "../../assets/icons/lock.png";
import eyeLogo from "../../assets/icons/eyeLogo.png";
import inputAccountIcon from "../../assets/icons/inputAccountIcon.png";
import { useNavigate } from "react-router";
import { registerUser } from "../../apis/auth";

function RegisterForm() {
  const navigate = useNavigate();
  const [form,setForm]=useState({name:"",email:"",confirmPassword:"",password:""});
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenConfirm, setIsHiddenConfirm] = useState(true);
  const handleChange=(e)=>{
      setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit=async (event)=>{
    event.preventDefault(); //to prevent reload
    if(form.password===form.confirmPassword){
      const response=await registerUser({name:form.name,email:form.email,password:form.password});
      if(response){
        console.log(response);
        localStorage.setItem("token", response.jwt);
        localStorage.setItem("userName", response.name);
        navigate("/");
    }
    }
    
}


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
            value={form.name}
            placeholder="Name"
            onChange={handleChange}
          ></input>
        </div>

        <div className={styles.form_input}>
          <img className={styles.icon} src={emailIcon}></img>
          <input
            type="textarea"
            id="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
          ></input>
        </div>

        <div className={styles.form_input}>
          <img className={styles.icon} src={passwordIcon}></img>
          <input
            className={styles.password_input}
            type={isHiddenConfirm ? "password" : "text"}
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
          ></input>

          <img onClick={()=>{setIsHiddenConfirm(!isHiddenConfirm);}} className={styles.icon} src={eyeLogo}></img>
        </div>

        <div className={styles.form_input}>
          <img className={styles.icon} src={passwordIcon}></img>
          <input
            className={styles.password_input}
            type={isHidden ? "password" : "text"}
            id="password"
            name="password"
            value={form.password}
            placeholder="Password"
            onChange={handleChange}
          ></input>

          <img onClick={()=>{setIsHidden(!isHidden);}}className={styles.icon} src={eyeLogo}></img>
        </div>

        <button onClick={handleSubmit} id={styles.submit_button}>Register</button>
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
