import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .get('http://localhost:8000/users/' + userName)
        .then((res) => {
          const user = res.data;
          toast.success("Вы успешно вошли в свой аккаунт!");
          setTimeout(() => {
            navigate(`/profile/${user.id}`);
          }, 2000);
        })
        .catch(() => {
          toast.error("Пользователь не найден");
        });
    }
  };

  const validate = () => {
    if (userName === "" || userName === null) {
      toast.error("Заполните никнейм");
      return false;
    }
    if (pass === "" || pass === null) {
      toast.error("Заполните пароль");
      return false;
    }
    return true;
  };

  return (
    <div className="mx-auto mt-20 p-5 bg-slate-100 max-w-lg shadow-lg shadow-slate-500/50 rounded-2xl">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1 className="text-center">Login</h1>
      <div className="flex flex-col gap-y-1">
        <label className="flex flex-col font-medium text-xs mx-auto">
          UserName
          <input
            className="border-2 text-sm placeholder:italic px-1 w-44"
            value={userName}
            placeholder="user Name"
            onChange={(e) => setUserName(e.target.value)}
            type="text"
          />
        </label>
        <label className="flex flex-col font-medium text-xs mx-auto">
          Password
          <input
            className="border-2 text-sm placeholder:italic px-1 w-44"
            value={pass}
            placeholder="password"
            onChange={(e) => setPass(e.target.value)}
            type="password"
          />
        </label>
      </div>
      <div className="flex justify-center gap-x-1">
        <button onClick={handleLogin}>Войти</button>
        <span>/</span>
        <button>
          <Link to="/register">Регистрация</Link>
        </button>
      </div>
    </div>
  );
}

export default Login;
