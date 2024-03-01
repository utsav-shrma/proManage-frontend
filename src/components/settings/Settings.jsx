import React, { useState } from "react";
import styles from "./Settings.module.css";
import passwordIcon from "../../assets/icons/lock.png";
import eyeLogo from "../../assets/icons/eyeLogo.png";
import inputAccountIcon from "../../assets/icons/inputAccountIcon.png";
import { useNavigate } from "react-router";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nameStorageKey } from "../../utils/constants";
import { updateName,updatePassword } from "../../apis/auth";
function Settings() {
  const [isHidden, setIsHidden] = useState(true);

  const [form,setForm]=useState({
    name:localStorage.getItem(nameStorageKey),
    oldPassword:"",
    newPassword:""});

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
}


  const notifySuccess = (field) => {
    
    toast.success(`${field} Updated Successful`, {
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

  const notifyFailure = (  field) => {
    
    toast.error(`${field} Update Not Successful`, {
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

  const handleUpdateName=async ()=>{
    const response=await updateName({name:form.name});
    if(response){
      console.log(response);
      localStorage.setItem(nameStorageKey,form.name);
      notifySuccess("Name");
     }
     else{
      notifyFailure("Name");
      
    }

     
  }

  const handleUpdatePassword=async ()=>{

    const response=await updatePassword({oldPassword:form.oldPassword,newPassword:form.newPassword});
    if(response){
      console.log(response);
      setForm({...form,[oldPassword]:"",[newPassword]:""});
      notifySuccess("Password");
     }
     else{
      notifyFailure("Password");
      
    }
  }

  const submitHandler=async ()=>{
    
    try{
      await handleUpdateName();

      if(form.oldPassword!="" && form.newPassword!=""){
        await handleUpdatePassword();
      }

    }
    catch(error){
      console.log(error);
      notifyFailure();
    }
      

    };
 


  return (
    <div className={styles.container}>
      <div className={styles.heading_container}>
        <h1 className={styles.heading}>Settings</h1>
      </div>
      <div className={styles.register_form}>
        <div className={styles.form_input}>
          <img className={styles.icon} src={inputAccountIcon}></img>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
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
            value={form.oldPassword}
            onChange={handleChange}
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
            value={form.newPassword}
            onChange={handleChange}
          ></input>

          <img
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            className={styles.icon}
            src={eyeLogo}
          ></img>
        </div>

        <button onClick={submitHandler} id={styles.submit_button}>
          Update
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  ); }



export default Settings;
