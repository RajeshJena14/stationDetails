import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import View from "./pages/View";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Upload />} />
              <Route path="/view" element={<View />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
