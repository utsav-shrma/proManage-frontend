import React from "react";
import style from "./WelcomeScreen.module.css";
import mascotLogo from "../../assets/images/Group.png";

function WelcomeScreen() {
  return (
    <dic className={style.main_container}>
      <div className={style.welcome_screen_container}>
        <div className={style.welcome_logo_container}>
          <div className={style.astronaut_logo}>
            <img className={style.image}src={mascotLogo}></img>
          </div>
          <h1 className={style.main_heading}>Welcome aboard my friend </h1>
          <h1 className={[style.main_heading, style.sub_heading].join(" ")}>
            just a couple of clicks and we start
          </h1>
        </div>
        <div className={style.form_container}></div>
      </div>
    </dic>
  );
}

export default WelcomeScreen;
