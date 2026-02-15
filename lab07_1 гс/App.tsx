import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ResetPassword from "./ResetPass";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}
