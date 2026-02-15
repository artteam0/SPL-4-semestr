import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u: any) => u.email === email && u.password === password);
  
    if (user) {
      setMessage("Авторизация успешна!");
    } else {
      setMessage("Неверные учетные данные");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Авторизация</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Войти</button>
      <p>{message}</p>
      <Link to="/sign-up">
        <button type="button">Еще не зарегистрированы?</button>
      </Link>
      <Link to="/reset-password">
        <button type="button">Забыли пароль?</button>
      </Link>
    </form>
  );
}
