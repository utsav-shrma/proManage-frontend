import React from 'react'
import Welcome from '../welcomeScreen/Welcome';
import RegisterForm from '../registerForm/RegisterForm';
import styles from './RegisterScreen.module.css'

function RegisterScreen() {
  return (
    <div className={styles.main_container}>
        <Welcome/>
        <RegisterForm></RegisterForm>
    </div>
  )
}

export default RegisterScreen