import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
import { tokenStorageKey } from "../utils/constants";
let axiosConfig = {
    headers: {
        'Authorization': localStorage.getItem(tokenStorageKey),
    }
  };

 //add query Params here
 export const getAllCards = async ({interval}) => {
    try {
      
      const reqUrl = `${baseURL}/card/?interval=${interval}`;
      const response = await axios.get(reqUrl,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

export const createCard = async ({ title, tasks, dueDate, isPublic, status, priority }) => {
    try {
      
      const reqUrl = `${baseURL}/card/`;
      const reqPayload = { title, tasks, dueDate, isPublic, status, priority };
      const response = await axios.post(reqUrl, reqPayload,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

 
  export const updateCard = async ({ title, tasks, dueDate, isPublic, status, priority,cardId }) => {
    try {
      
      const reqUrl = `${baseURL}/card/${cardId}`;
      const reqPayload = { title, tasks, dueDate, isPublic, status, priority };
      const response = await axios.put(reqUrl, reqPayload,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

 export const deleteCard = async ({cardId}) => {
    try {
      const reqUrl = `${baseURL}/card/${cardId}`;
      const response = await axios.delete(reqUrl,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const shareCard = async ({cardId}) => {
    try {
      const reqUrl = `${baseURL}/card/share/${cardId}`;
      const response = await axios.patch(reqUrl,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const checkTask = async ({taskId}) => {
    try {
      const reqUrl = `${baseURL}/task/${taskId}`;
      const response = await axios.patch(reqUrl,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getAnalytics = async () => {
    try {
      const reqUrl = `${baseURL}/card/analytics/`;
      const response = await axios.get(reqUrl,axiosConfig);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };