import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App"; // Your SignUp/Login Component
import HomePage from "./HomePage"; // Your HomePage Component

function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default MainApp;
