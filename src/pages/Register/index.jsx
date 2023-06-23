import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios
        .post("http://localhost:8000/users", {
          users: users,
          id: id,
          name: name,
          password: password,
          email: email,
          phone: phone,
          country: country,
          address: address,
          gender: gender,
        })
        .then((res) => {
          toast.success("Регистрация успешно выполнена");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          const userListItem = res.data;
          setUsers([userListItem, ...users]);
          setId("");
          setName("");
          setPassword("");
          setEmail("");
          setPhone("");
          setCountry("");
          setAddress("");
          setGender("");
        })
        .catch(() => {
          toast.error("Ошибка сервера");
        });
    }
  };

  const validate = () => {
    if (id === "" || id === null) {
      toast.error("Заполните имя пользователя");
      return false;
    }
    if (name === "" || name === null) {
      toast.error("Заполните имя");
      return false;
    }
    if (password === "" || password === null) {
      toast.error("Заполните пароль");
      return false;
    }
    if (email === "" || email === null) {
      toast.error("Заполните email");
      return false;
    }
    if (phone === "" || phone === null) {
      toast.error("Заполните номер телефона");
      return false;
    }
    if (country === "" || country === null) {
      toast.error("Заполните страну");
      return false;
    }
    if (address === "" || address === null) {
      toast.error("Заполните адрес");
      return false;
    }
    return true;
  };
  return (
    <div className="container mx-auto">
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
      <div className="flex gap-x-20 justify-center mx-auto my-20 bg-slate-100 shadow-lg shadow-slate-500/50 pb-10 pt-5 max-w-lg rounded-2xl">
        <div className="flex flex-col gap-y-5">
          <h1 className="font-bold">User Registration</h1>
          <label className="flex flex-col font-medium text-xs">
            User Name
            <input
              className="border-2 text-sm placeholder:italic px-1"
              type="text"
              placeholder="user Name"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </label>
          <label className="flex flex-col font-medium text-xs">
            Full Name
            <input
              className="border-2 text-sm placeholder:italic px-1"
              type="text"
              placeholder="full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col font-medium text-xs">
            Phone
            <input
              className="border-2 text-sm placeholder:italic px-1"
              type="tel"
              maxlength="13"
              placeholder="phone"
              value={phone}
              onChange={(e) => {
                if (e.target.value === "" || /[0-9]+$/.test(e.target.value)) {
                  setPhone(e.target.value);
                }
              }}
            />
          </label>
          <label className="flex flex-col font-medium text-xs">
            Address
            <input
              className="border-2 text-sm placeholder:italic px-1"
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <button
            className="border-2 relative w-32 bg-slate-50 rounded-md"
            onClick={handleSubmit}
          >
            Registration
          </button>
        </div>
        <div className="flex flex-col gap-y-5 my-11">
          <label className="flex flex-col font-medium text-xs">
            Country
            <input
              className="border-2 text-sm placeholder:italic px-1"
              type="text"
              placeholder="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
          <label className="flex flex-col font-medium text-xs">
            Password
            <input
              className="border-2 text-sm placeholder:italic px-1"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="flex flex-col font-medium text-xs">
            Email
            <input
              className="border-2 text-sm placeholder:italic px-1"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="font-medium text-xs">
            Gender
            <div className="flex">
              <input
                className="mx-1"
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label>male</label>
              <input
                className="mx-1"
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label>female</label>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Register;
