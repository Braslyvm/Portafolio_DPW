import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Header />
      <div className={`right-section ${collapsed ? "collapsed" : ""}`}>
        <Sidebar onCollapse={setCollapsed} />
        <MainContent />
      </div>
    </div>
  );
}
