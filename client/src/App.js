import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login"; 
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/singup/SingUp";
import "./App.css";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  );
};

export default App;
