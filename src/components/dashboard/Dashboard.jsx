import React from "react";
import styles from "./Dashboard.module.css";
import logo from "../../assets/icons/codesandbox.png";
import boardLogo from "../../assets/icons/layout.png";
import analyticsLogo from "../../assets/icons/database.png";
import settingsLogo from "../../assets/icons/settings.png";
import logoutLogo from "../../assets/icons/Logout.png";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        navigate("/login");
    }
  return (
    <div className={styles.main_container}>
      <div className={styles.upper_container}>
        <div className={styles.tab_container}>
          <img className={styles.logo_image} src={logo}></img>
          <h1 className={styles.logo_heading}>Pro Manage</h1>
        </div>

        <div className={styles.hover_container}>
          <div onClick={()=>{navigate("/");}} className={styles.tab_container}>
            <img className={styles.logo_image} src={boardLogo}></img>
            <h1 className={styles.tab_heading}>Board</h1>
          </div>
        </div>
        <div className={styles.hover_container}>
          <div onClick={()=>{navigate("/analytics");}} className={styles.tab_container}>
            <img className={styles.logo_image} src={analyticsLogo}></img>
            <h1 className={styles.tab_heading}>Analytics</h1>
          </div>
        </div>
        <div className={styles.hover_container}>
          <div onClick={()=>{navigate("/settings");}} className={styles.tab_container}>
            <img className={styles.logo_image} src={settingsLogo}></img>
            <h1 className={styles.tab_heading}>Settings</h1>
          </div>
        </div>
      </div>

      <div className={styles.logout_container}>
        <button onClick={handleLogout}className={styles.logout_button}>
        <img className={styles.logo_image} src={logoutLogo}></img>
        <h1 id={styles.logout_text} className={styles.tab_heading}>
          Logout
        </h1>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
