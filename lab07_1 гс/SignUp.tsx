import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/.test(password);
const validateName = (name: string) => /^[A-Za-zА-Яа-яЁё\s]{2,50}$/.test(name);

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validateName(name)) return setMessage("Некорректное имя");
    if (!validateEmail(email)) return setMessage("Некорректный email");
    if (!validatePassword(password)) return setMessage("Слабый пароль");
    if (password !== confirmPassword) return setMessage("Пароли не совпадают");
  
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u: any) => u.email === email)) {
      return setMessage("Пользователь с таким email уже зарегистрирован");
    }
  
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    setMessage("Регистрация успешна!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <input placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button type="submit">Зарегистрироваться</button>
      <p>{message}</p>
      <Link to="/sign-in">
        <button type="button">Уже зарегистрированы?</button>
      </Link>
    </form>
  );
}
