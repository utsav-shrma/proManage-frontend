import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
import { tokenStorageKey } from "../utils/constants";
const jwt = localStorage.getItem(tokenStorageKey);
let axiosConfig = {
    headers: {
        'Authorization': jwt,
    }
  };


export const registerUser = async ({ name, email, password }) => {
  try {
    
    const reqUrl = `${baseURL}/register`;
    const reqPayload = { name, email, password };
    const response = await axios.post(reqUrl, reqPayload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const reqUrl = `${baseURL}/login`;
    const reqPayload = { email, password };
    const response = await axios.post(reqUrl, reqPayload);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
