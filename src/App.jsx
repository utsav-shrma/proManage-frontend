import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage/BoardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CardPage from "./pages/CardPage/CardPage";
import RegisterScreen from "./components/registerScreen/RegisterScreen";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import PrivateWrapper from "./pages/PrivateWrapper/PrivateWrapper";
import ConfirmationPopup from "./components/confirmationPopup/ConfirmationPopup";
import EditCreatePopup from "./components/editCreatePopup/EditCreatePopup";
import ShareCard from "./components/shareCard/ShareCard";
import { createContext } from 'react';

export const MyContext = createContext("");
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateWrapper />}>  for protecting routes to be uncommented in future in prod*/}
          <Route path="/" element={<BoardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        {/* </Route> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/edit" element={<EditCreatePopup />} />
        <Route path="/card/:cardId" element={<ShareCard />} />
        <Route path="/confirm" element={<ConfirmationPopup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
