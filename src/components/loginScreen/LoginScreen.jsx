import React from 'react';
import styles from './LoginScreen.module.css';
import Welcome from '../welcomeScreen/Welcome';
import LoginForm from '../loginForm/LoginForm';

function LoginScreen() {
  return (
    <div className={styles.main_container}>
    <Welcome></Welcome>
    <LoginForm></LoginForm>
    </div>
  )
}

export default LoginScreen