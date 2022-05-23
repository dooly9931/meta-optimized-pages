import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Elem1 from "./components/Elem1/Elem1";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/path1" element={<Elem1 />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
