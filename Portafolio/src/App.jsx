import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import MainContent from "./components/MainContent";
import Perfil from "./components/Perfil";
import Cursos from "./components/Cursos";
import DetallesCurso from "./components/DetallesCurso";
import Comentarios from "./components/Comentarios";
import Hobby from "./components/Hobby";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/overrides.css";
import "./styles/components.css";

export default function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Router>
      <div className="app-layout">
        <TopHeader onMenu={() => setCollapsed(false)} />

        <div className="body-layout">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <div className={`right-section ${collapsed ? "collapsed" : "expanded"}`}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/Comentarios" element={<Comentarios />} />
              <Route path="/hobbies" element={<Hobby />} />
              <Route path="/curso/:codigo" element={<DetallesCurso />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
