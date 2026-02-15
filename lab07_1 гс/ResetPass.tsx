import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return setMessage("Неверный email");
    setMessage("Новый пароль: Password");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Восстановление пароля</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Восстановить</button>
      <Link to="/sign-up">
        <button type="button">Вернуться на главную</button>
      </Link>
      <p>{message}</p>
    </form>
  );
}
