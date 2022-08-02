import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Components/Homepage.js";
import Secondpage from "./Components/Secondpage.js";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer.js";
import Dummy from "./Components/Dummy";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/secondpage" element={<Secondpage />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="/dummy" element={<Dummy />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
