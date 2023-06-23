import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import User from "./pages/User";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => setUserId(res.data))
      .catch(() => toast.error("Ошибка сервера"));
  }, []);
  
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<User users={userId} />}/>
    </Routes>
    </div>
  );
}

export default App;
