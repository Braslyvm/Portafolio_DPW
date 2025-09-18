import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Perfil from "./components/Perfil";
import Cursos from "./components/Cursos";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/overrides.css";
import "./styles/components.css";

export default function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Router>
      <div className="app-layout">
        <Sidebar onCollapse={setCollapsed} />
        <div className={`right-section ${collapsed ? "collapsed" : "expanded"}`}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/cursos" element={<Cursos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
