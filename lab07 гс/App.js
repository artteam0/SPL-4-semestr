import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/.test(password);
const validateName = (name) => /^[A-Za-zА-Яа-яЁё\s]{2,50}$/.test(name);

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateName(name)) return setMessage("Некорректное имя");
    if (!validateEmail(email)) return setMessage("Некорректный email");
    if (!validatePassword(password)) return setMessage("Слабый пароль");
    if (password !== confirmPassword) return setMessage("Пароли не совпадают");
    setMessage("Регистрация успешна!");
    // Здесь можно отправить данные на сервер
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Регистрация</h2>
      <input placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <button type="submit">Зарегистрироваться</button>
      <p>{message}</p>
      <Link to="/sign-in">Уже зарегистрированы?</Link>
    </form>
  );
};

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return setMessage("Неверный email");
    if (email === "test@test.com" && password === "test") {
      setMessage("Авторизация успешна!");
    } else {
      setMessage("Неверные учетные данные");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Авторизация</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Войти</button>
      <p>{message}</p>
      <Link to="/sign-up">Еще не зарегистрированы?</Link>
      <br />
      <Link to="/reset-password">Забыли пароль?</Link>
    </form>
  );
};

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return setMessage("Неверный email");
    setMessage("Новый пароль: NewPass123");
    // Здесь отправка запроса на сброс пароля
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Восстановление пароля</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Восстановить</button>
      <p>{message}</p>
      <Link to="/sign-in">Вернуться к авторизации</Link>
    </form>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  </Router>
);

export default App;
