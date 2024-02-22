import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CardPage from './pages/CardPage/CardPage';
import RegisterScreen from './components/registerScreen/RegisterScreen';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
