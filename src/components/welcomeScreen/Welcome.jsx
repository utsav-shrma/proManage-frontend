import React from 'react'
import styles from "./Welcome.module.css";
import mascotLogo from "../../assets/images/Group.png";

function Welcome() {
  return (
    <div className={styles.container}>
    <div className={styles.welcome_screen_container}>
      <div className={styles.welcome_logo_container}>
        <div className={styles.astronaut_logo}>
          <img className={styles.image} src={mascotLogo}></img>
        </div>
        <h1 className={styles.main_heading}>Welcome aboard my friend </h1>
        <h1 className={[styles.main_heading, styles.sub_heading].join(" ")}>
          just a couple of clicks and we start
        </h1>
      </div>
      </div>
    </div>
  )
}

export default Welcome