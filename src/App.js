import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Event from "./pages/event/Event";
import Create from "./pages/create/Create";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
