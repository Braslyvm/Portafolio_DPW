import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Header />
      <div className={`body-layout ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Sidebar onCollapse={setSidebarCollapsed} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
