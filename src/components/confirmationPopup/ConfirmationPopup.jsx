import React from "react";
import styles from "./ConfirmationPopup.module.css";
function ConfirmationPopup({ isLogoutOrDelete, handleSubmit }) {
  const message = isLogoutOrDelete ? "Logout" : "Delete";
  return (
    <div className={styles.temp}>
      <div className={styles.popup}>
        <h1>Are you sure you want to {message}?</h1>
        <button onClick={handleSubmit} className={styles.submit}>
          Yes, {message}
        </button>
        <button className={styles.cancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
