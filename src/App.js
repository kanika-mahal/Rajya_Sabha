import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage.js";
import Secondpage from "./Components/Secondpage.js";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/secondpage" element={<Secondpage />} />
          <Route exact path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
